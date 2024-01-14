/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
