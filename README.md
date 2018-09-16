# Typescript NPM Package Starter

[![CircleCI](https://circleci.com/gh/gregchamberlain/ts-package-starter/tree/master.svg?style=svg)](https://circleci.com/gh/gregchamberlain/ts-package-starter/tree/master)

## Initial Setup

```
git clone https://github.com/gregchamberlain/ts-package-starter.git <your-package-name>

cd <your-package-name>

git remote remove origin
```

or to merge future updates to this package

```
git remote rename origin base
```

Replace all `ts-package-starter` in `package.json` with your package name.

Update the LICENSE file accordingly.

```
yarn install
```

## Testing

This project has testing setup through [Jest](https://jestjs.io/). Tests are
located in the `__tests__` directory, and can be run with:

```
yarn test
```

## CircleCI

This project comes with a [CircleCI](https://circleci.com/) workflow
pre-configured to build, test, and publish your package to npm.

`Build` and `Test` jobs are run for every `git push` on every branch.

The `Publish` job is only run when a new release it tagged (prefixed with a v).

### Setup

In order for [CircleCI](https://circleci.com/) to be able to `publish` the
package on your behalf, you need to create an environment variable `NPM_TOKEN`
with your npm api token.

You can get your npm api token by running:

```
npm login

cat ~/.npmrc
```
