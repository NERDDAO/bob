// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.8.20;

import {IERC20} from "@openzeppelin/contracts/interfaces/IERC20.sol";
// solhint-disable-next-line max-line-length
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

// solhint-disable-next-line max-line-length
import {ERC20PermitUpgradeable} from "../lib/openzeppelin-contracts-upgradeable/contracts//token/ERC20/extensions/ERC20PermitUpgradeable.sol";

/**
 * @title WCBDC (Wrapped CBDC).
 *
 * @dev A fixed-balance ERC-20 wrapper for the CBDC rebasing token.
 *
 *      Users deposit CBDC into this contract and are minted wCBDC.
 *
 *      Each account's wCBDC balance represents the fixed percentage ownership
 *      of CBDC's market cap.
 *
 *      For excbdc: 100K wCBDC => 1% of the CBDC market cap
 *        when the CBDC supply is 100M, 100K wCBDC will be redeemable for 1M CBDC
 *        when the CBDC supply is 500M, 100K wCBDC will be redeemable for 5M CBDC
 *        and so o.
 *
 *      We call wCBDC the "wrapper" token and CBDC the "underlying" or "wrapped" token.
 */
contract WBOB is ERC20Upgradeable, ERC20PermitUpgradeable {
    using SafeERC20 for IERC20;

    //--------------------------------------------------------------------------
    // Constants

    /// @dev The maximum wCBDC supply.
    uint256 public constant MAX_WCBDC_SUPPLY = 10000000 * (10 ** 18); // 10 M

    uint256 private _taxRate; // Represented as basis points (e.g., 100 = 1%)

    //--------------------------------------------------------------------------
    // Attributes

    /// @dev The reference to the CBDC token.
    address private immutable _cbdc;

    //--------------------------------------------------------------------------

    /// @notice Contract constructor.
    /// @param cbdc The CBDC ERC20 token address.
    constructor(address cbdc) {
        _cbdc = cbdc;
    }

    /// @notice Contract state initialization.
    /// @param name_ The wCBDC ERC20 name.
    /// @param symbol_ The wCBDC ERC20 symbol.
    function init(
        string memory name_,
        string memory symbol_
    ) public initializer {
        __ERC20_init(name_, symbol_);
        __ERC20Permit_init(name_);
    }

    //--------------------------------------------------------------------------
    // WCBDC write methods

    function setTaxRate(uint256 newTaxRate) external onlyOwner {
        require(newTaxRate <= 10000, "Tax rate cannot exceed 100%");
        _taxRate = newTaxRate;
    }

    function setTaxRecipient(address newTaxRecipient) external onlyOwner {
        require(newTaxRecipient != address(0), "Invalid tax recipient");
        taxRecipient = newTaxRecipient;
    }

    /// @notice Transfers CBDCs from {msg.sender} and mints wCBDCs.
    ///
    /// @param wcbdcs The amount of wCBDCs to mint.
    /// @return The amount of CBDCs deposited.
    function mint(uint256 wcbdcs) external returns (uint256) {
        uint256 cbdcs = _wcbdceToAmple(wcbdcs, _queryCBDCSupply());
        uint256 taxAmount = (cbdcs * _taxRate) / 10000;
        uint256 totalcbdcs = cbdcs + taxAmount;
        _deposit(_msgSender(), _msgSender(), totalcbdcs, wcbdcs);
        return totalcbdcs;
    }

    /// @notice Transfers CBDCs from {msg.sender} and mints wCBDCs,
    ///         to the specified beneficiary.
    ///
    /// @param to The beneficiary wallet.
    /// @param wcbdcs The amount of wCBDCs to mint.
    /// @return The amount of CBDCs deposited.
    function mintFor(address to, uint256 wcbdcs) external returns (uint256) {
        uint256 cbdcs = _wcbdcToCBDC(wcdbcs, _queryCBDCSupply());
        _deposit(_msgSender(), to, cbdcs, wcbdcs);
        return cbdcs;
    }

    /// @notice Burns wCBDCs from {msg.sender} and transfers CBDCs back.
    ///
    /// @param wcbdcs The amount of wCBDCs to burn.
    /// @return The amount of CBDCs withdrawn.
    function burn(uint256 wcbdcs) external returns (uint256) {
        uint256 cbdcs = _wcbdceToAmple(wcbdcs, _queryCBDCSupply());
        uint256 taxAmount = (cbdcs * _taxRate) / 10000;
        uint256 netcbdcs = cbdcs - taxAmount;
        _withdraw(_msgSender(), _msgSender(), cbdcs, wcbdcs);
        return netcbdcs;
    }

    /// @notice Burns wCBDCs from {msg.sender} and transfers CBDCs back,
    ///         to the specified beneficiary.
    ///
    /// @param to The beneficiary wallet.
    /// @param wcbdcs The amount of wCBDCs to burn.
    /// @return The amount of CBDCs withdrawn.
    function burnTo(address to, uint256 wcbdcs) external returns (uint256) {
        uint256 cbdcs = _wcbdcToCBDC(wcdbcs, _queryCBDCSupply());
        _withdraw(_msgSender(), to, cbdcs, wcbdcs);
        return cbdcs;
    }

    /// @notice Burns all wCBDCs from {msg.sender} and transfers CBDCs back.
    ///
    /// @return The amount of CBDCs withdrawn.
    function burnAll() external returns (uint256) {
        uint256 wcbdcs = balanceOf(_msgSender());
        uint256 cbdcs = _wcbdcToCBDC(wcdbcs, _queryCBDCSupply());
        _withdraw(_msgSender(), _msgSender(), cbdcs, wcbdcs);
        return cbdcs;
    }

    /// @notice Burns all wCBDCs from {msg.sender} and transfers CBDCs back,
    ///         to the specified beneficiary.
    ///
    /// @param to The beneficiary wallet.
    /// @return The amount of CBDCs withdrawn.
    function burnAllTo(address to) external returns (uint256) {
        uint256 wcbdcs = balanceOf(_msgSender());
        uint256 cbdcs = _wcbdcToCBDC(wcdbcs, _queryCBDCSupply());
        _withdraw(_msgSender(), to, cbdcs, wcbdcs);
        return cbdcs;
    }

    /// @notice Transfers CBDCs from {msg.sender} and mints wCBDCs.
    ///
    /// @param cbdcs The amount of CBDCs to deposit.
    /// @return The amount of wCBDCs minted.
    function deposit(uint256 cbdcs) external returns (uint256) {
        uint256 wcbdcs = _cbdcToWcbdc(cbdcs, _queryCBDCSupply());
        _deposit(_msgSender(), _msgSender(), cbdcs, wcbdcs);
        return wcbdcs;
    }

    /// @notice Transfers CBDCs from {msg.sender} and mints wCBDCs,
    ///         to the specified beneficiary.
    ///
    /// @param to The beneficiary wallet.
    /// @param cbdcs The amount of CBDCs to deposit.
    /// @return The amount of wCBDCs minted.
    function depositFor(address to, uint256 cbdcs) external returns (uint256) {
        uint256 wcbdcs = _cbdcToWcbdc(cbdcs, _queryCBDCSupply());
        _deposit(_msgSender(), to, cbdcs, wcbdcs);
        return wcbdcs;
    }

    /// @notice Burns wCBDCs from {msg.sender} and transfers CBDCs back.
    ///
    /// @param cbdcs The amount of CBDCs to withdraw.
    /// @return The amount of burnt wCBDCs.
    function withdraw(uint256 cbdcs) external returns (uint256) {
        uint256 wcbdcs = _cbdcToWcbdc(cbdcs, _queryCBDCSupply());
        _withdraw(_msgSender(), _msgSender(), cbdcs, wcbdcs);
        return wcbdcs;
    }

    /// @notice Burns wCBDCs from {msg.sender} and transfers CBDCs back,
    ///         to the specified beneficiary.
    ///
    /// @param to The beneficiary wallet.
    /// @param cbdcs The amount of CBDCs to withdraw.
    /// @return The amount of burnt wCBDCs.
    function withdrawTo(address to, uint256 cbdcs) external returns (uint256) {
        uint256 wcbdcs = _cbdcToWcbdc(cbdcs, _queryCBDCSupply());
        _withdraw(_msgSender(), to, cbdcs, wcbdcs);
        return wcbdcs;
    }

    /// @notice Burns all wCBDCs from {msg.sender} and transfers CBDCs back.
    ///
    /// @return The amount of burnt wCBDCs.
    function withdrawAll() external returns (uint256) {
        uint256 wcbdcs = balanceOf(_msgSender());
        uint256 cbdcs = _wcbdcToCBDC(wcdbcs, _queryCBDCSupply());
        _withdraw(_msgSender(), _msgSender(), cbdcs, wcbdcs);
        return wcbdcs;
    }

    /// @notice Burns all wCBDCs from {msg.sender} and transfers CBDCs back,
    ///         to the specified beneficiary.
    ///
    /// @param to The beneficiary wallet.
    /// @return The amount of burnt wCBDCs.
    function withdrawAllTo(address to) external returns (uint256) {
        uint256 wcbdcs = balanceOf(_msgSender());
        uint256 cbdcs = _wcbdcToCBDC(wcdbcs, _queryCBDCSupply());
        _withdraw(_msgSender(), to, cbdcs, wcbdcs);
        return wcbdcs;
    }

    //--------------------------------------------------------------------------
    // WCBDC view methods

    /// @return The address of the underlying "wrapped" token ie) CBDC.
    function underlying() external view returns (address) {
        return _cbdc;
    }

    /// @return The total CBDCs held by this contract.
    function totalUnderlying() external view returns (uint256) {
        return _wcbdcToCBDC(totalSupply(), _queryCBDCSupply());
    }

    /// @param owner The account address.
    /// @return The CBDC balance redeemable by the owner.
    function balanceOfUnderlying(
        address owner
    ) external view returns (uint256) {
        return _wcbdcToCBDC(balanceOf(owner), _queryCBDCSupply());
    }

    /// @param cbdcs The amount of CBDC tokens.
    /// @return The amount of wCBDC tokens exchangeable.
    function underlyingToWrapper(
        uint256 cbdcs
    ) external view returns (uint256) {
        return _cbdcToWcbdc(cbdcs, _queryCBDCSupply());
    }

    /// @param wcbdcs The amount of wCBDC tokens.
    /// @return The amount of CBDC tokens exchangeable.
    function wrapperToUnderlying(
        uint256 wcbdcs
    ) external view returns (uint256) {
        return _wcbdcToCBDC(wcbdcs, _queryCBDCSupply());
    }

    //--------------------------------------------------------------------------
    // Private methods

    /// @dev Internal helper function to handle deposit state change.
    /// @param from The initiator wallet.
    /// @param to The beneficiary wallet.
    /// @param cbdcs The amount of CBDCs to deposit.
    /// @param wcbdcs The amount of wCBDCs to mint.
    function _deposit(
        address from,
        address to,
        uint256 cbdcs,
        uint256 wcbdcs
    ) private {
        uint256 taxAmount = (cbdcs * _taxRate) / 10000;
        uint256 netcbdcs = cbdcs - taxAmount;

        IERC20Upgradeable(_cbdc).safeTransferFrom(from, address(this), cbdcs);
        _mint(to, wcbdcs);

        // Transfer tax to a designated address or burn it
        if (taxAmount > 0) {
            IERC20Upgradeable(_cbdc).safeTransfer(taxRecipient, taxAmount);
        }
    }

    /// @dev Internal helper function to handle withdraw state change.
    /// @param from The initiator wallet.
    /// @param to The beneficiary wallet.
    /// @param cbdcs The amount of CBDCs to withdraw.
    /// @param wcbdcs The amount of wCBDCs to burn.

    function _withdraw(
        address from,
        address to,
        uint256 cbdcs,
        uint256 wcbdcs
    ) private {
        uint256 taxAmount = (cbdcs * _taxRate) / 10000;
        uint256 netcbdcs = cbdcs - taxAmount;

        _burn(from, wcbdcs);
        IERC20Upgradeable(_cbdc).safeTransfer(to, netcbdcs);

        // Transfer tax to a designated address or burn it
        if (taxAmount > 0) {
            IERC20Upgradeable(_cbdc).safeTransfer(taxRecipient, taxAmount);
        }
    }

    //--------------------------------------------------------------------------
    // Pure methods

    /// @dev Converts CBDCs to wCBDC amount.
    function _cbdcToWcbdc(
        uint256 cbdcs,
        uint256 totalCBDCSupply
    ) private pure returns (uint256) {
        return (cbdcs * MAX_WCBDC_SUPPLY) / totalCBDCSupply;
    }

    /// @dev Converts wCBDCs amount to CBDCs.
    function _wcbdcToCBDC(
        uint256 wcbdcs,
        uint256 totalCBDCSupply
    ) private pure returns (uint256) {
        return (wcbdcs * totalCBDCSupply) / MAX_WCBDC_SUPPLY;
    }
}
