import { DeployProxyOptions } from '@openzeppelin/hardhat-upgrades/dist/utils'
import { ethers, getNamedAccounts, upgrades } from 'hardhat'

async function main() {
  const Market = await ethers.getContractFactory('MSC20Market')
  console.log('正在发布 MSCMarket...')
  const options: DeployProxyOptions = {
    initializer: 'initialize',
    kind: 'uups',
  }
  const { owner, verifier } = await getNamedAccounts()

  const proxy = await upgrades.deployProxy(Market, [owner, verifier, 2], options)

  console.log('拥有者: ', owner)
  console.log('验证者: ', verifier)
  console.log('代理合约地址: ', proxy.target)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
