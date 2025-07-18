/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    'prettier', // Prettier와 충돌하는 ESLint 규칙을 비활성화합니다.
  ],
  parser: 'vue-eslint-parser', // .vue 파일을 파싱하기 위해 추가
  parserOptions: {
    parser: '@typescript-eslint/parser', // <script> 태그 안의 TypeScript 코드를 파싱하기 위해 추가
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'prettier', // Prettier 규칙을 ESLint 규칙으로 실행
  ],
  rules: {
    'prettier/prettier': 'error', // Prettier 규칙에 맞지 않으면 에러 발생
  },
};
