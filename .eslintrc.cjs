/* eslint-env node */
module.exports = {
	root: true,
	extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
	rules: {
		'import/no-extraneous-dependencies': ['warn', { packageDir: './' }]
	},
	ignorePatterns: ['esm', 'cjs', 'node_modules'],
	overrides: [
		{
			files: ['./**/*.{ts,tsx}'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				'airbnb-typescript/base',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'prettier'
			],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				project: './tsconfig.eslint.json',
				tsconfigRootDir: __dirname
			},
			plugins: ['@typescript-eslint'],
			rules: {
				'import/no-extraneous-dependencies': ['warn', { packageDir: './' }]
			}
		}
	]
};
