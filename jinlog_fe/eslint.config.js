import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    ignores: [
      "node_modules",
      ".DS_Store",
      "dist",
      "dist-ssr",
      "coverage",
      "*.local",
      "/cypress/videos/",
      "/cypress/screenshots/",
      ".vscode/*",
      "!.vscode/extensions.json",
      ".idea",
      "*.suo",
      "*.ntvs*",
      "*.njsproj",
      "*.sln",
      "*.sw?",
      "*.tsbuildinfo"
    ]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      // 다른 필요한 규칙들을 여기에 추가할 수 있습니다.
    }
  }
];
