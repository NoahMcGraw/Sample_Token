var MyERC20Token = artifacts.require("./MyERC20Token.sol");

module.exports = function(deployer) {
  deployer.deploy(MyERC20Token, "My ERC 20 Token", "TKN", 100000000);
};
