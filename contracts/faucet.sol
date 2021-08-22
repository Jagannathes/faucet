// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract faucet is ERC20{

    constructor(uint256 _totalSupply) public ERC20("faucet", "fct") {
        _mint(msg.sender,_totalSupply);
    }
     
}