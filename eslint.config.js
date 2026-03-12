// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'app',
    pnpm: true,
    rules: {
      'pnpm/yaml-enforce-settings': 'off',
      'e18e/ban-dependencies': 'off',
      'test/no-import-node-test': 'off',
    },
  },
)
