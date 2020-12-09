module.exports = {
	"rules": {
		"no-console": `off`,
		"indent": [`error`, `tab`],
		"semi": [`error`, `always`],
		"quotes": [`error`, `backtick`],
		"keyword-spacing": [
			`error`,
			{
				"before": true, "after": true
			}
		],
		"no-async-promise-executor": 0,
		"no-case-declarations": 0,
	},
	"extends": `eslint:recommended`,
	"env": {
		"es6": true,
		"node": true,
	},
	"parserOptions": {
		"ecmaVersion": 2020
	},
};
