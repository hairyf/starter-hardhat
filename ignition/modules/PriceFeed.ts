import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

export default buildModule('PriceFeedModule', (m) => {
  const priceFeed = m.contract('PriceFeed')

  return { priceFeed }
})
