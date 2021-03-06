module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "@vue/standard",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020 // 支持最新ES语法
  },
  rules: {
    semi: "off", // 分号
    quotes: "off", // 单引号
    eqeqeq: "warn", // 只能使用 "===" 或 "!=="
    "no-multi-spaces": "warn", // 禁止多个空格
    "require-await": "warn", // 禁止没有await表达式的异步函数
    "@typescript-eslint/no-array-constructor": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": ["error",
      {
        multiline: {
          delimiter: "none"
        },
        singleline: {
          delimiter: "comma"
        }
      }],
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": "off",
    "prefer-const": "off",
    "vue/array-bracket-spacing": "error",
    "vue/arrow-spacing": "error",
    "vue/block-spacing": "error",
    "vue/brace-style": "error",
    "vue/camelcase": "error",
    "vue/comma-dangle": "error",
    "vue/component-name-in-template-casing": "error",
    "vue/eqeqeq": "error",
    "vue/key-spacing": "error",
    "vue/match-component-file-name": "error",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "lines-between-class-members": "off",
    "vue/object-curly-spacing": "off",
    "vue/max-attributes-per-line": [2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
}
