module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    // 'standard-with-typescript',
    'plugin:react-hooks/recommended'
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'interface',
            format: ['PascalCase'],
            custom: {
              regex: '^I[A-Z]',
              match: true
            }
          }
        ],
        '@typescript-eslint/indent': 'off', // This is the job of StandardJS, they are competing rules so we turn off the Typescript one.
        'node/no-unsupported-features/es-syntax': 'off', // Allows us to use Import and Export keywords.
        // semi: ['error', 'always'],
        semi: 'off',
        // 'typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/semi': 'error',
        indent: ['error', 4],
        'react-hooks/exhaustive-deps': 'error',
        'react/jsx-key': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        // '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'always' }],
        'no-console': ['error'], // use electron log instead
        'no-undef': 'off', // ts tells us instead
        'no-redeclare': 'off', // ts tells us instead
        'comma-dangle': ['error', 'only-multiline'],
        '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
        'multiline-ternary': 'off'
      }
    },
    {
      files: ['**/*.test.ts?(x)'],
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: ['tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}
