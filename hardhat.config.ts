import process from 'node:process'
import hardhatToolboxViemPlugin from '@nomicfoundation/hardhat-toolbox-viem'
import { defineConfig } from 'hardhat/config'

export default defineConfig({
  plugins: [hardhatToolboxViemPlugin],
  solidity: {
    profiles: {
      default: {
        version: '0.8.28',
      },
      production: {
        version: '0.8.28',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: 'edr-simulated',
      chainType: 'l1',
    },
    hardhatOp: {
      type: 'edr-simulated',
      chainType: 'op',
    },
    sepolia: {
      type: 'http',
      chainType: 'l1',
      url: 'https://1rpc.io/sepolia',
      accounts: [process.env.SEPOLIA_PRIVATE_KEY!],
    },
  },
})
