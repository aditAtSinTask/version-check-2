const versionCheck2 = require("../index.js");

function consoleSeparator() {
  console.log("///////////////////////////////////////////////////");
}

(async () => {
  consoleSeparator();
  console.log(">>> TestCase1 ( version-check-2@0.0.0 ) <<<");
  const testCase1 = await versionCheck2("version-check-2", "0.0.0");
  console.log(">>>", testCase1, "\n");

  consoleSeparator();
  console.log(">>> TestCase2 ( version-check-2@0.0.13 ) <<<");
  const testCase2 = await versionCheck2("version-check-2", "0.0.13");
  console.log(">>>", testCase2, "\n");

  consoleSeparator();
  console.log(">>> TestCase3 ( version-check-2@latest ) <<<");
  const testCase3 = await versionCheck2("version-check-2", "latest");
  console.log(">>>", testCase3, "\n");

  consoleSeparator();
  console.log(">>> TestCase4 ( version-check-9-not-found@0.0.11 ) <<<");
  const testCase4 = await versionCheck2("version-check-9-not-found", "0.0.11");
  console.log(">>>", testCase4, "\n");

  consoleSeparator();
  console.log(">>> TestCase5 ( version-check-2@1.not-semver.1 ) <<<");
  const testCase5 = await versionCheck2("version-check-2", "1.not-semver.1");
  console.log(">>>", testCase5, "\n");
})();
