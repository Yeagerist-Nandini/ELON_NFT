require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  networks:{
    hardhat:{},
    sepolia:{
      url:"https://eth-sepolia.g.alchemy.com/v2/iKOkkWezHbPEoysNmPXDOaUTyVn2Jnd7",
      accounts:[`0x${PRIVATE_KEY}`],
    },
  },
};


/**
* @type import('hardhat/config').HardhatUserConfig
*/


 