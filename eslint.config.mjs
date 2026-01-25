import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['eslint.config.mjs'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
    plugins: { prettier },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'eqeqeq': 'error',
      'curly': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
    },
  },
  {
    files: ['src/index.js'],
    rules: {
      'no-console': 'off',
    },
  },
];
