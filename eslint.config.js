import eslint from '@eslint/js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tslint from 'typescript-eslint';

export default tslint.config(
	eslint.configs.recommended,
	...tslint.configs.recommended,
	...tslint.configs.stylistic,
	{
		ignores: [ 'node_modules', 'tsconfig.base.json', 'eslint.config.js', 'jest.config.js' ],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				project: true,
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			'simple-import-sort': simpleImportSort
		},
		rules: {
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-extra-semi': 'error',
			'@typescript-eslint/no-unused-vars': [ 'warn', {
				'argsIgnorePattern': '^_',
				'varsIgnorePattern': '^_'
			}
			],
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/no-explicit-any': [ 'error', {
				'ignoreRestArgs': true
			}],
			'@typescript-eslint/no-non-null-assertion': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'indent': [ 'error', 'tab', {
				'SwitchCase': 1,
				'outerIIFEBody': 1,
				'MemberExpression': 1,
				'FunctionDeclaration': {
					'parameters': 'first',
					'body': 1
				},
				'ignoredNodes': [
					'FunctionExpression > .params[decorators.length > 0]',
					'FunctionExpression > .params > :matches(Decorator,:not(:first-child))',
					'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
				]
			}],
			'arrow-parens': [ 'error', 'as-needed' ],
			'brace-style': [ 'error', '1tbs', {
				'allowSingleLine': true
			}],
			'comma-dangle': [ 'error', {
				'arrays': 'never',
				'objects': 'never',
				'imports': 'never',
				'exports': 'never',
				'functions': 'never'
			}],
			'computed-property-spacing': [
				'error',
				'never',
				{
					'enforceForClassMembers': true
				}
			],
			'eol-last': [
				'error',
				'never'
			],
			'no-global-assign': 'error',
			'no-irregular-whitespace': 'error',
			'no-return-assign': [
				'error',
				'except-parens'
			],
			'object-shorthand': [
				'warn',
				'properties'
			],
			'function-call-argument-newline': [
				'error',
				'consistent'
			],
			'prefer-arrow-callback': [
				'error'
			],
			'arrow-spacing': [
				'error',
				{
					'before': true,
					'after': true
				}
			],
			'no-mixed-spaces-and-tabs': [
				'error'
			],
			'linebreak-style': [
				'error',
				'unix'
			],
			'func-call-spacing': [
				'error',
				'never'
			],
			'space-before-function-paren': [
				'error',
				{
					'anonymous': 'always',
					'named': 'always',
					'asyncArrow': 'always'
				}
			],
			'key-spacing': [
				'error',
				{
					'beforeColon': false,
					'afterColon': true,
					'mode': 'strict'
				}
			],
			'keyword-spacing': [
				'error',
				{
					'before': true,
					'after': true
				}
			],
			'lines-between-class-members': [
				'error',
				'always',
				{
					'exceptAfterSingleLine': true
				}
			],
			'no-multi-spaces': [
				'error'
			],
			'no-multiple-empty-lines': [
				'error',
				{
					'max': 1
				}
			],
			'space-in-parens': [
				'error',
				'never'
			],
			'no-trailing-spaces': [
				'error'
			],
			'no-whitespace-before-property': [
				'error'
			],
			'object-curly-newline': [
				'error',
				{
					'multiline': true,
					'consistent': true
				}
			],
			'object-curly-spacing': [
				'error',
				'always'
			],
			'padded-blocks': [
				'error',
				'never'
			],
			'object-property-newline': [
				'error',
				{
					'allowMultiplePropertiesPerLine': true
				}
			],
			'yoda': [
				'error',
				'never'
			],
			'rest-spread-spacing': [
				'error',
				'never'
			],
			'quotes': [
				'error',
				'single'
			],
			'semi': [
				'error',
				'always'
			],
			'no-await-in-loop': [
				'error'
			],
			'no-constructor-return': [
				'error'
			],
			'no-duplicate-imports': [
				'error',
				{
					'includeExports': true
				}
			],
			'no-promise-executor-return': [
				'error'
			],
			'no-self-compare': [
				'error'
			],
			'no-template-curly-in-string': [
				'error'
			],
			'no-unmodified-loop-condition': [
				'error'
			],
			'no-unreachable-loop': [
				'error'
			],
			'no-unused-private-class-members': [
				'error'
			],
			'accessor-pairs': [
				'off'
			],
			'arrow-body-style': [
				'error',
				'as-needed'
			],
			'consistent-return': [
				'off'
			],
			'curly': [
				'error',
				'multi-or-nest'
			],
			'default-case': [
				'off'
			],
			'default-case-last': [
				'error'
			],
			'default-param-last': [
				'error'
			],
			'dot-notation': [
				'off'
			],
			'eqeqeq': [
				'error',
				'always'
			],
			'func-name-matching': [
				'error'
			],
			'grouped-accessor-pairs': [
				'error'
			],
			'array-bracket-spacing': [
				'error',
				'always',
				{
					'singleValue': false,
					'objectsInArrays': false,
					'arraysInArrays': true
				}
			],
			'comma-spacing': [
				'error',
				{
					'before': false,
					'after': true
				}
			],
			'comma-style': [
				'error',
				'last'
			]
		}
	}
);
