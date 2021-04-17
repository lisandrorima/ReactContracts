var SimpleStorage = artifacts.require("./SimpleStorage.sol");
const Rental2 = artifacts.require("Rental2");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Rental2);

};
