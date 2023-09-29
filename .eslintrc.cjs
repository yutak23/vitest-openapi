/* eslint-env node */
module.exports = {
	root: true,
	env: { es2022: true },
	parserOptions: { ecmaVersion: 13 },
	extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
	rules: {
		'import/no-extraneous-dependencies': ['warn', { packageDir: './' }],
		'import/extensions': 'off'
	},
	ignorePatterns: ['dist', 'node_modules']
};
