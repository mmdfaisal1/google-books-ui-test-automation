# Google-Books-UI-Test Automation

This repo contains E2E UI tests for [Google Books](https://books.google.com/), using [Playwright](https://playwright.dev/) test automation framework, which includes:

- Playwright library as the browser driver.
- Playwright Test as the test runner.

## Environment Seup and Installation

- Install `Node.js`. Please see instructions [here](https://nodejs.org/en)
- Install `yarn` (classic). Please see instructions [here](https://classic.yarnpkg.com/en/docs/install#mac-stable)
- Clone this repo and `cd` into the root directory with `package.json`.
- Run the following commands:

```shell
yarn install                                        # Installs dependencies
npx playwright install --with-deps chromium         # Installs chromium browser used by Playwright
```

## Running Tests

- To run all tests, in the root dir of the project, run the following command

  ```
  yarn test
  ```

- To run any particular test by its title

  ```
  npx playwright test -g "[title]"
  ```

  e.g. `npx playwright test -g "Validate searched item is listed in search results"`

## Additional Options

- `--headed` to see the tests run in a visible browser

  To see more command line options for running tests, click [here](https://playwright.dev/docs/running-tests)

## Test Reports

- After every test run (regardless of success or failure), the html and json test reports get saved in the `./reports` directory.
- To open the last html report, run
  ```
  npx playwright show-report reports/html-report
  ```

## Troubleshooting

- In case of test failures, the html report will also includes [Playwright Trace Viewer](https://playwright.dev/docs/trace-viewer) which greatly helps diagnosing failures. It also incudes video recording of the test.

## Playwright Configuration

- It is defined in `./playwright.config.ts`. More details about it can be found [here](https://playwright.dev/docs/test-configuration)

## Continuous Integration

- Please see under `./.github/workflows/` for CI workflow(s).
