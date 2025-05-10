//  @ts-check
import eslint from '@eslint/js';
import { tanstackConfig } from '@tanstack/eslint-config';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tanstackConfig,
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    plugins: {
      perfectionist,
    },
    rules: {
      'import/order': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          internalPattern: ['^~/.+'],
        },
      ],
    },
  },
);
