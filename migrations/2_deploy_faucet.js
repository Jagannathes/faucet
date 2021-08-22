const faucet = artifacts.require("./faucet.sol");

module.exports = function (deployer) {
    // second param is initial supply
  deployer.deploy(faucet, 1000000);
};