module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        useTabs: true,
        tabWidth: 4,
        semi: false,
        trailingComma: 'all',
        endOfLine: 'crlf',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['PascalCase', 'camelCase'],
      },
      {
        selector: 'variable',
        modifiers: ['const', 'global'],
        format: ['UPPER_CASE'],
      },
      {
        selector: 'classProperty',
        modifiers: ['readonly'],
        format: ['UPPER_CASE', 'camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'classProperty',
        modifiers: ['static'],
        format: ['UPPER_CASE', 'camelCase'],
      },
      {
        selector: 'objectLiteralProperty',
        format: null,
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        modifiers: ['unused'],
        format: null,
        leadingUnderscore: 'allow',
      },
      {
        selector: ['classMethod', 'function', 'parameter'],
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: ['typeAlias', 'class', 'interface'],
        format: ['PascalCase'],
      },
    ],
  },
}
