import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { network } from 'hardhat'

describe('counter', async () => {
  const { viem, ignition } = await network.connect()
  const publicClient = await viem.getPublicClient()
})
