import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { network } from 'hardhat'
import Counter from '../ignition/modules/Counter'

describe('counter', async () => {
  const { viem, ignition } = await network.connect()
  const publicClient = await viem.getPublicClient()

  it('should emit the Increment event when calling the inc() function', async () => {
    const { counter } = await ignition.deploy(Counter)

    await viem.assertions.emitWithArgs(
      counter.write.inc(),
      counter,
      'Increment',
      [1n],
    )
  })

  it('the sum of the Increment events should match the current value', async () => {
    const { counter } = await ignition.deploy(Counter)
    const deploymentBlockNumber = await publicClient.getBlockNumber()

    // run a series of increments
    for (let i = 1n; i <= 10n; i++) {
      await counter.write.incBy([i])
    }

    const events = await publicClient.getContractEvents({
      address: counter.address,
      abi: counter.abi,
      eventName: 'Increment',
      fromBlock: deploymentBlockNumber,
      strict: true,
    })

    // check that the aggregated events match the current value
    let total = 0n
    for (const event of events) {
      total += event.args.by
    }

    assert.equal(total, await counter.read.x())
  })
})
