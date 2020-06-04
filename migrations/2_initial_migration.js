const ERC777Contract = artifacts.require("ERC777Contract.sol");
const defaultOperators = ["0xD7f13793585e5A1912EFf7C3b8600A0e2d127E6a"]

module.exports = function(deployer) {
  deployer.deploy(ERC777Contract,"token777","T777",1000,defaultOperators)
};
