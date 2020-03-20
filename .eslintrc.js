module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-tabs": 0,
    "smarttabs": 0,
    "indent": ["error", 4],
    "handle-callback-err": [2, "^.+Error$"]
  }
}
