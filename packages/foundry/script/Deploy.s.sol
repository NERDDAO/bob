//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {WBOB} from "../contracts/WBOB.sol";
import "../contracts/RebaseToken.sol";
import "./DeployHelpers.s.sol";
import "../contracts/MonetaryPolicy.sol";

contract DeployScript is ScaffoldETHDeploy {
    error InvalidPrivateKey(string);

    function run() external {
        uint256 deployerPrivateKey = setupLocalhostEnv();
        if (deployerPrivateKey == 0) {
            revert InvalidPrivateKey(
                "You don't have a deployer account. Make sure you have set DEPLOYER_PRIVATE_KEY in .env or use `yarn generate` to generate a new random account"
            );
        }
        vm.startBroadcast(deployerPrivateKey);

        //RebaseToken Bob = new RebaseToken();

        WBOB BOBWrapper = new WBOB(0xBA5eDF631828EBbe81B850F476FA5936e3C15783);

        /*MonetaryPolicy Mpol = new MonetaryPolicy(
            address(Bob), //token address
            address(Bob), // Univ2 Pair
            1000 // Rebase period
        );*/

        console.logString(
            string.concat(
                "YourContract deployed at: ",
                //vm.toString(address(Bob)),
                vm.toString(address(BOBWrapper))
                //vm.toString(address(Mpol))
            )
        );

        vm.stopBroadcast();

        /**
         * This function generates the file containing the contracts Abi definitions.
         * These definitions are used to derive the types needed in the custom scaffold-eth hooks, for example.
         * This function should be called last.
         */
        exportDeployments();
    }

    function test() public {}
}
