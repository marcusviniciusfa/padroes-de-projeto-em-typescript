module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: [
		'@typescript-eslint/eslint-plugin',
		'prettier'
	],
  ignorePatterns: [
    '.eslintrc.js',
    'commitlint.config.js'
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off'
  },
};
