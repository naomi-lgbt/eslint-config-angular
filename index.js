module.exports = {
  root: true,
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
      },
      extends: [
        "@nhcarrigan/eslint-config",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        "@angular-eslint/no-empty-lifecycle-method": "off",
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
      },
    },
    {
      files: ["*.spec.ts", "**/test.ts"],
      parserOptions: {
        project: ["tsconfig.json"],
        createDefaultProgram: true,
      },
      extends: [
        "@nhcarrigan/eslint-config",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
      ],
      rules: {
        "import/no-unresolved": "off",
        "init-declarations": "off",
        "@angular-eslint/no-empty-lifecycle-method": "off",
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
      },
    },
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {},
    },
  ],
};
