import { ethers, upgrades } from 'hardhat'
import 'dotenv/config'

const proxyAddress = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'

async function main() {
  console.log('指定的 UUPS 代理合約地址', proxyAddress)
  const factory = await ethers.getContractFactory('MSC20MarketV2')
  console.log('升級合約進行中...')
  const proxy = await upgrades.upgradeProxy(proxyAddress, factory)
  console.log('代理合约地址: ', proxy.target)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
