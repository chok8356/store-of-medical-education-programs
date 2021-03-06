const vue = {
  files: ['**/*.vue'],
  customSyntax: 'postcss-html'
}

const scss = {
  files: ['**/*.scss'],
  customSyntax: 'postcss-scss'
}

module.exports = {
  plugins: ['stylelint-scss', 'stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'order/properties-alphabetical-order': true,
    'scss/at-rule-no-unknown': true,
    'selector-pseudo-element-no-unknown': [true, {
      ignorePseudoElements: ['v-deep']
    }]
  },
  overrides: [
    vue,
    scss
  ]
}
