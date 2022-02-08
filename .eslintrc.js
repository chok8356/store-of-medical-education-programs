module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
      readonly: 'array'
    }],
    '@typescript-eslint/indent': ['error', 2, {
      SwitchCase: 1
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/type-annotation-spacing': ['error', {
      after: true
    }],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-var-requires': 0,
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true
        }
      }
    ],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {
      after: true,
      before: false
    }],
    'keyword-spacing': ['error', {
      after: true,
      before: true
    }],
    'max-len': ['error', {
      code: 120
    }],
    'object-curly-spacing': [2, 'always'],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      }
    }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': ['error', 'never'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/html-closing-bracket-newline': ['error', {
      multiline: 'never',
      singleline: 'never'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      endTag: 'never',
      selfClosingTag: 'always',
      startTag: 'never'
    }],
    'vue/max-attributes-per-line': ['error', {
      multiline: {
        allowFirstLine: false,
        max: 1
      },
      singleline: 1
    }],
    'vue/script-indent': ['error', 2, {
      switchCase: 1
    }],
    'vue/attributes-order': ['error', {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      alphabetical: true
    }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
