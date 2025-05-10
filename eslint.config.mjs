//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'

export default [
  ...tanstackConfig,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'perfectionist/sort-imports': 'error',
    },
  },
]
