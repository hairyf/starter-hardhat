import { HardhatUserConfig, task } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-verify'
import '@openzeppelin/hardhat-upgrades'
import 'hardhat-deploy'
import 'dotenv/config'

const {
  OWNER_PRIVATE_KEY_TESTNET,
  OWNER_PRIVATE_KEY_MAINNET
} = process.env as Record<string, string>

const config: HardhatUserConfig = {
  paths: { sources: './src' },
  solidity: '0.8.20',
  defaultNetwork: 'hardhat',
  namedAccounts: {
    deployer: { default: 0 },
    owner: { default: 0 },
  },
  networks: {
    hardhat: {
      chainId: 31337,
      gasPrice: 875000000,
      allowUnlimitedContractSize: true,
      saveDeployments: true,
    },
    testnet: {
      url: 'http://..',
      chainId: 0,
      accounts: [OWNER_PRIVATE_KEY_TESTNET],
      saveDeployments: true,
      allowUnlimitedContractSize: true,
    },
    mainnet: {
      url: 'http://..',
      chainId: 0,
      accounts: [OWNER_PRIVATE_KEY_MAINNET],
      saveDeployments: true,
      allowUnlimitedContractSize: true,
      gas: 'auto',
      gasPrice: 'auto',
    },
  },
  etherscan: {
    apiKey: {
      mainnet: ' ',
      testnet: ' ',
    },
    customChains: [
      {
        network: 'mainnet',
        chainId: 18686,
        urls: {
          apiURL: '..',
          browserURL: '..',
        },
      },
      {
        network: 'testnet',
        chainId: 5167003,
        urls: {
          apiURL: '..',
          browserURL: '..',
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
}

export default config
