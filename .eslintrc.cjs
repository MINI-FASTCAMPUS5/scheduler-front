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
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': 'off', // interface에서 사용하지 않는 변수는 에러로 처리하지 않도록 설정
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-multiple-empty-lines': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ]
  },
  // https://stackoverflow.com/questions/72780296/warning-react-version-not-specified-in-eslint-plugin-react-settings-while-run
  settings: {
    react: {
      version: 'detect'
    }
  }
}
