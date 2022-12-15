module.exports = {
  extends: [
    'vuepress',
    'prettier',
    'eslint:recommended',
    'plugin:markdown/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['markdown', '@typescript-eslint'],
  overrides: [
    {
      files: ['**/**/**/*.md'],
      processor: 'markdown/markdown'
    }
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        parser: 'babel-ts'
      }
    ],
    '@typescript-eslint/no-var-requires': ['off']
  }
};
