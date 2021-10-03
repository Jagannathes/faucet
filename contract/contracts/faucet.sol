// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract faucet is ERC20{
    address owner;
    constructor(uint256 _totalSupply) public ERC20("faucet", "fct") {
        _mint(msg.sender,_totalSupply);
        owner = msg.sender;
    }

    function mintTokenTo(address _reciever, uint256 _tokenCount) public{
        require(msg.sender == owner,"Only Contract Owner can mint tokens");
        
        _mint(_reciever,_tokenCount);
    }

}