module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [],
  globals: { window: true },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': ['off'],
    'no-shadow': ['off'],
    'import/no-named-as-default': ['off'],
    'array-callback-return': 'off',
    'consistent-return': 'off',
    'no-param-reassign': [2, { props: false }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
