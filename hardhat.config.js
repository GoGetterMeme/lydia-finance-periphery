require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')

const FUJI_ACCOUNT = process.env.FUJI_ACCOUNT || "0x0000000000000000000000000000000000000000";
const MAIN_ACCOUNT = process.env.MAIN_ACCOUNT || "0x0000000000000000000000000000000000000000";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 500
          }
        }
      }
    ]
  },
  networks: {
    hardhat: {
      gasPrice: 470000000000,
      chainId: 43112,
      initialDate: '2020-10-10'
    },
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43113,
      accounts: [FUJI_ACCOUNT]
    },
    mainnet: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 470000000000,
      chainId: 43114,
      accounts: [MAIN_ACCOUNT]
    }
  }
}
