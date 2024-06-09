module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "" ,// run the tests with particular tag or if not provided all the tests
    formatOptions: {
      snippetInterface: "async-await"
    },
    paths: [
      "e2e/test/features/"
    ],
    dryRun: false,
    require: [
      "e2e/test/steps/*.ts",
      "e2e/hooks/hooks.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "summary",
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    parallel: 2,
    workers: 2
  },
  rerun: {
    formatOptions: {
      snippetInterface: "async-await"
    },
    dryRun: false,
    require: [
      "e2e/test/steps/*.ts",
      "e2e/hooks/hooks.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "summary",
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "rerun:@rerun.txt"
    ],
    parallel: 5,
    workers: 8
  }
}