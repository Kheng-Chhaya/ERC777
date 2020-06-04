const testcontract = artifacts.require("ERC777Contract.sol");

contract("testcontract",(accounts)=>{

it("testing the properties of my token",()=>{
	var instance
	return testcontract.deployed().then((ins)=>{
		instance=ins;
		return instance.address
	}).then((address)=>{
		assert.notEqual(address,0,"this address is equal 0");
		return instance.name()
	}).then((name)=>{
		assert.equal(name,"token777","should be the correct name");
		return instance.symbol()
	}).then((symbol)=>{
		assert.equal(symbol,"T777","should be the correct symbol");
		return instance.totalSupply()
	}).then((totalSupply)=>{
		assert.equal(totalSupply.toNumber(),1000,"should be the contract totalSupply");
	})
})




})