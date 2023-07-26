module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended' // self closing tag룰 적용하기 위해서 "eslint-plugin-react" 추가 설치
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ]
  }
}
