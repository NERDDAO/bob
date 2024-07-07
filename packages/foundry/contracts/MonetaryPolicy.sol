/**
 *Submitted for verification at basescan.org on 2024-06-13
 */

// SPDX-License-Identifier: GPL-3.0-or-later
/*

WRITTEN BY: @x_BASED_GOD_x ON X
TELEGRAM: https://t.me/bankofbased
X: https://x.com/bankofbased

FOLLOW @x_BASED_GOD_x ON X FOR MORE VIRAL DROPS. DONT BE THE LAST TO KNOW.

 ▄▄▄▄    ▄▄▄       ███▄    █  ██ ▄█▀    ▒█████    █████▒    ▄▄▄▄    ▄▄▄        ██████ ▓█████ ▓█████▄ 
▓█████▄ ▒████▄     ██ ▀█   █  ██▄█▒    ▒██▒  ██▒▓██   ▒    ▓█████▄ ▒████▄    ▒██    ▒ ▓█   ▀ ▒██▀ ██▌
▒██▒ ▄██▒██  ▀█▄  ▓██  ▀█ ██▒▓███▄░    ▒██░  ██▒▒████ ░    ▒██▒ ▄██▒██  ▀█▄  ░ ▓██▄   ▒███   ░██   █▌
▒██░█▀  ░██▄▄▄▄██ ▓██▒  ▐▌██▒▓██ █▄    ▒██   ██░░▓█▒  ░    ▒██░█▀  ░██▄▄▄▄██   ▒   ██▒▒▓█  ▄ ░▓█▄   ▌
░▓█  ▀█▓ ▓█   ▓██▒▒██░   ▓██░▒██▒ █▄   ░ ████▓▒░░▒█░       ░▓█  ▀█▓ ▓█   ▓██▒▒██████▒▒░▒████▒░▒████▓ 
░▒▓███▀▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒ ▒ ▒▒ ▓▒   ░ ▒░▒░▒░  ▒ ░       ░▒▓███▀▒ ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░░░ ▒░ ░ ▒▒▓  ▒ 
▒░▒   ░   ▒   ▒▒ ░░ ░░   ░ ▒░░ ░▒ ▒░     ░ ▒ ▒░  ░         ▒░▒   ░   ▒   ▒▒ ░░ ░▒  ░ ░ ░ ░  ░ ░ ▒  ▒ 
 ░    ░   ░   ▒      ░   ░ ░ ░ ░░ ░    ░ ░ ░ ▒   ░ ░        ░    ░   ░   ▒   ░  ░  ░     ░    ░ ░  ░ 
 ░            ░  ░         ░ ░  ░          ░ ░              ░            ░  ░      ░     ░  ░   ░    
      ░                                                          ░                            ░      

           ||====================================================================||
           ||//$\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//$\\||
           ||(100)==================| FEDERAL RESERVE NOTE |================(100)||
           ||\\$//        ~         '------========--------'                \\$//||
           ||<< /        /$\              // ____ \\                         \ >>||
           ||>>|  12    //L\\            // ///..) \\         BASEDBUCKS   12 |<<||
           ||<<|        \\ //           || <||  >\  ||                        |>>||
           ||>>|         \$/            ||  $$ --/  ||        One Hundred     |<<||
        ||====================================================================||>||
        ||//$\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//$\\||<||
        ||(100)==================| FEDERAL RESERVE NOTE |================(100)||>||
        ||\\$//        ~         '------========--------'                \\$//||\||
        ||<< /        /$\              // ____ \\                         \ >>||)||
        ||>>|  12    //L\\            // ///..) \\         BASEDBUCKS   12 |<<||/||
        ||<<|        \\ //           || <||  >\  ||                        |>>||=||
        ||>>|         \$/            ||  $$ --/  ||        One Hundred     |<<||
        ||<<|      BASEDBUCKS        *\\  |\_/  //* series                 |>>||
        ||>>|  12                     *\\/___\_//*   1989                  |<<||
        ||<<\      Treasurer     ______/BASED GOD\_______     Secretary 12 />>||
        ||//$\                 ~| UNITED STATES OF BASED |~               /$\\||
        ||(100)===================  ONE HUNDRED DOLLARS =================(100)||
        ||\\$//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\$//||
        ||====================================================================||

FOLLOW @x_BASED_GOD_x ON X FOR MORE VIRAL DROPS. DONT BE THE LAST TO KNOW.

*/
pragma solidity ^0.8.19;

interface IUniswapV2Pair {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external pure returns (string memory);

    function symbol() external pure returns (string memory);

    function decimals() external pure returns (uint8);

    function totalSupply() external view returns (uint);

    function balanceOf(address owner) external view returns (uint);

    function allowance(
        address owner,
        address spender
    ) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);

    function transfer(address to, uint value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint value
    ) external returns (bool);

    function DOMAIN_SEPARATOR() external view returns (bytes32);

    function PERMIT_TYPEHASH() external pure returns (bytes32);

    function nonces(address owner) external view returns (uint);

    function permit(
        address owner,
        address spender,
        uint value,
        uint deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external;

    event Mint(address indexed sender, uint amount0, uint amount1);
    event Burn(
        address indexed sender,
        uint amount0,
        uint amount1,
        address indexed to
    );
    event Swap(
        address indexed sender,
        uint amount0In,
        uint amount1In,
        uint amount0Out,
        uint amount1Out,
        address indexed to
    );
    event Sync(uint112 reserve0, uint112 reserve1);

    function MINIMUM_LIQUIDITY() external pure returns (uint);

    function factory() external view returns (address);

    function token0() external view returns (address);

    function token1() external view returns (address);

    function getReserves()
        external
        view
        returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);

    function price0CumulativeLast() external view returns (uint);

    function price1CumulativeLast() external view returns (uint);

    function kLast() external view returns (uint);

    function mint(address to) external returns (uint liquidity);

    function burn(address to) external returns (uint amount0, uint amount1);

    function swap(
        uint amount0Out,
        uint amount1Out,
        address to,
        bytes calldata data
    ) external;

    function skim(address to) external;

    function sync() external;

    function initialize(address, address) external;
}

interface IRebaseableERC20 {
    function totalSupply() external view returns (uint256);

    function balanceOf(address who) external view returns (uint256);

    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    function transfer(address to, uint256 value) external returns (bool);

    function approve(address spender, uint256 value) external returns (bool);

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external returns (bool);

    function rebase(
        uint256 epoch,
        int256 supplyDelta
    ) external returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

contract MonetaryPolicy {
    IUniswapV2Pair public pair;
    IRebaseableERC20 public token;

    uint256 public LAST_REBASE_BLOCK;
    uint256 public REBASE_INTERVAL;
    uint256 public EPOCH = 0;

    bool public intervalLocked = false;
    address public deployer;

    event LogRebase(uint256 indexed epoch, uint256 totalSupply);

    constructor(
        address pairAddress,
        address tokenAddress,
        uint256 rebaseInterval
    ) {
        pair = IUniswapV2Pair(pairAddress);
        token = IRebaseableERC20(tokenAddress);
        REBASE_INTERVAL = rebaseInterval;
        LAST_REBASE_BLOCK = block.timestamp;
        deployer = msg.sender;
    }

    function changeInterval(uint256 newInterval) public {
        require(!intervalLocked, "MonetaryPolicy: Interval is locked");
        require(
            msg.sender == deployer,
            "MonetaryPolicy: Only deployer can change interval"
        );
        REBASE_INTERVAL = newInterval;
    }

    function lockInterval() public {
        require(
            msg.sender == deployer,
            "MonetaryPolicy: Only deployer can lock interval"
        );
        intervalLocked = true;
    }

    function canRebase() public view returns (bool) {
        return block.timestamp >= LAST_REBASE_BLOCK + REBASE_INTERVAL;
    }

    function rebase() public {
        require(canRebase(), "MonetaryPolicy: Cannot rebase yet");
        require(
            token.balanceOf(msg.sender) > 0,
            "MonetaryPolicy: Insufficient balance"
        );

        // Potential risk here if total supply is too high
        uint256 totalSupply = token.totalSupply();

        int256 currentSupply = int256(totalSupply);
        int256 supplyDelta = currentSupply / 100;

        token.rebase(EPOCH, -supplyDelta);

        pair.sync();
        LAST_REBASE_BLOCK = block.timestamp;
        EPOCH += 1;
        emit LogRebase(EPOCH, totalSupply);
    }
}
