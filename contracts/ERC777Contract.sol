pragma solidity 0.6.7;
import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract ERC777Contract is ERC777
{
    constructor(string memory _name,string memory _symbol,uint _totalSupply,address[] memory _defaultOperators)
    ERC777(_name,_symbol,_defaultOperators) public
    {
       _mint(msg.sender,_totalSupply,"me chhaya","no default operators");
    }
}
