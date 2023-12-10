# Naomi's ESLint Config - Angular

This package holds my ESLint configuration for easy installation and syncing changes across all of my Angular projects.

## Live Version

This package is currently published. [View the `npm` page](https://www.npmjs.com/package/@nhcarrigan/eslint-config-angular).

## Installation

To install this package, run the following command:

```bash
npm i @nhcarrigan/eslint-config-angular eslint
```

## Compatibility

This package is compatible with ESLint 8 and Angular 17.

## Usage

To use this package, add the following to your `.eslintrc.json` file:

```json
{
  "extends": "@nhcarrigan/eslint-config-angular"
}
```

## Warnings and Errors

A rule is set to be a warning when it is something that is okay during development (e.g. using a `console.log`, or not having a JSDoc definition yet) but should not make it to production code.

A rule is set to an error when it is something that should not occur in development or production (e.g. missing semi-colons, using loose equality).

## Feedback and Bugs

If you have feedback or a bug report, please feel free to open a GitHub issue!

## Contributing

If you would like to contribute to the project, you may create a Pull Request containing your proposed changes and we will review it as soon as we are able! Please review our [contributing guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Before interacting with our community, please read our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This software is licensed under our [global software license](https://docs.nhcarrigan.com/#/license).

Copyright held by Naomi Carrigan.

## Contact

We may be contacted through our [Chat Server](http://chat.nhcarrigan.com) or via email at `contact@nhcarrigan.com`.
