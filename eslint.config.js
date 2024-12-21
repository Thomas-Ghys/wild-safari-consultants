const nx = require('@nx/eslint-plugin');
const html = require('@html-eslint/eslint-plugin');

module.exports = [
	...nx.configs['flat/base'],
	...nx.configs['flat/typescript'],
	...nx.configs['flat/javascript'],
	{
		ignores: ['**/dist']
	},
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		rules: {
			'@nx/enforce-module-boundaries': [
				'error',
				{
					enforceBuildableLibDependency: true,
					allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
					depConstraints: [
						{
							sourceTag: 'type:shell',
							onlyDependOnLibsWithTags: [
								'type:shell',
								'type:feature',
								'type:ui',
								'type:utils',
								'type:data'
							]
						},
						{
							sourceTag: 'type:feature',
							onlyDependOnLibsWithTags: [
								'type:feature',
								'type:ui',
								'type:utils',
								'type:data'
							]
						},
						{
							sourceTag: 'type:ui',
							onlyDependOnLibsWithTags: [
								'type:ui',
								'type:utils',
								'type:data'
							]
						},
						{
							sourceTag: 'type:utils',
							onlyDependOnLibsWithTags: [
								'type:utils',
								'type:data'
							]
						},
						{
							sourceTag: 'type:data',
							onlyDependOnLibsWithTags: ['type:data']
						},
						{
							sourceTag: 'domain:wild-safari-consultants',
							onlyDependOnLibsWithTags: [
								'domain:wild-safari-consultants',
								'domain:common',
								'domain:theming',
								'domain:home',
								'domain:about',
								'domain:explore',
								'domain:contact',
								'domain:gallery'
							]
						},
						{
							sourceTag: 'domain:common',
							onlyDependOnLibsWithTags: ['domain:common']
						},
						{
							sourceTag: 'domain:theming',
							onlyDependOnLibsWithTags: [
								'domain:theming',
								'domain:common'
							]
						},
						{
							sourceTag: 'domain:home',
							onlyDependOnLibsWithTags: [
								'domain:home',
								'domain:common'
							]
						},
						{
							sourceTag: 'domain:about',
							onlyDependOnLibsWithTags: [
								'domain:about',
								'domain:common'
							]
						},
						{
							sourceTag: 'domain:explore',
							onlyDependOnLibsWithTags: [
								'domain:explore',
								'domain:common'
							]
						},
						{
							sourceTag: 'domain:contact',
							onlyDependOnLibsWithTags: [
								'domain:contact',
								'domain:common'
							]
						},
						{
							sourceTag: 'domain:gallery',
							onlyDependOnLibsWithTags: [
								'domain:gallery',
								'domain:common'
							]
						}
					]
				}
			],
			'default-case': 'error',
			'no-array-constructor': 'error',
			'no-empty-function': [
				'error',
				{
					allow: ['constructors']
				}
			],
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-lone-blocks': 'error',
			'no-lonely-if': 'error',
			'no-script-url': 'error',
			'no-undef-init': 'error',
			'no-useless-escape': 'error',
			'no-useless-rename': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-const': 'error',
			'prefer-object-has-own': 'error',
			'quote-props': ['error', 'as-needed'],
			'spaced-comment': 'error',
			'array-bracket-spacing': 'error',
			'arrow-parens': 'error',
			'arrow-spacing': 'error',
			'block-spacing': 'error',
			'brace-style': 'error',
			'comma-dangle': 'error',
			'comma-spacing': 'error',
			'func-call-spacing': 'error',
			'implicit-arrow-linebreak': 'error',
			indent: [
				'error',
				'tab',
				{
					SwitchCase: 1
				}
			],
			'key-spacing': 'error',
			'keyword-spacing': 'error',
			'new-parens': 'error',
			'no-extra-parens': ['error', 'functions'],
			'no-multi-spaces': 'error',
			'no-trailing-spaces': 'error',
			'no-whitespace-before-property': 'error',
			'object-curly-spacing': 'error',
			'operator-linebreak': 'error',
			'padded-blocks': ['error', 'never'],
			'padding-line-between-statements': 'error',
			quotes: ['error', 'single'],
			'rest-spread-spacing': 'error',
			semi: 'error',
			'semi-spacing': 'error',
			'semi-style': 'error',
			'space-before-blocks': 'error',
			'space-in-parens': 'error',
			'space-infix-ops': 'error',
			'space-unary-ops': 'error',
			'switch-colon-spacing': 'error',
			'template-curly-spacing': 'error',
			'wrap-regex': 'error'
		}
	},
	{
		...html.configs['flat/recommended'],
		files: ['**/*.html'],
		rules: {
			'@html-eslint/no-duplicate-attrs': 'error',
			'@html-eslint/no-duplicate-id': 'error',
			'@html-eslint/no-extra-spacing-text': 'error',
			'@html-eslint/no-inline-styles': 'error',
			'@html-eslint/no-obsolete-tags': 'error',
			'@html-eslint/no-script-style-type': 'error',
			'@html-eslint/no-target-blank': 'error',
			'@html-eslint/require-button-type': 'error',
			'@html-eslint/require-closing-tags': 'error',
			'@html-eslint/require-doctype': 'error',
			'@html-eslint/require-li-container': 'error',
			'@html-eslint/require-meta-charset': 'error',
			'@html-eslint/no-multiple-h1': 'error',
			'@html-eslint/require-lang': 'error',
			'@html-eslint/require-meta-description': 'error',
			'@html-eslint/require-title': 'error',
			'@html-eslint/no-abstract-roles': 'error',
			'@html-eslint/no-accesskey-attrs': 'error',
			'@html-eslint/no-aria-hidden-body': 'error',
			'@html-eslint/no-non-scalable-viewport': 'error',
			'@html-eslint/no-positive-tabindex': 'error',
			'@html-eslint/no-skip-heading-levels': 'error',
			'@html-eslint/require-frame-title': 'error',
			'@html-eslint/require-img-alt': 'error',
			'@html-eslint/require-meta-viewport': 'error',
			'@html-eslint/attrs-newline': 'error',
			'@html-eslint/element-newline': 'error',
			'@html-eslint/id-naming-convention': ['error', 'kebab-case'],
			'@html-eslint/indent': ['error', 'tab'],
			'@html-eslint/no-extra-spacing-attrs': 'error',
			'@html-eslint/no-multiple-empty-lines': 'error',
			'@html-eslint/no-trailing-spaces': 'error',
			'@html-eslint/quotes': ['error', 'double'],
			'@html-eslint/sort-attrs': 'error'
		}
	}
];
