import versionCheck2 from '../index.js';

(async () => {
  const testCase1 = await versionCheck2('version-check-2', '0.0.0');
  const testCase2 = await versionCheck2('version-check-2', '0.0.13');
  const testCase3 = await versionCheck2('version-check-2', 'latest');
  const testCase4 = await versionCheck2('version-check-9', '0.0.11');

  console.log('>>> TestCase1: ', testCase1);
  console.log('>>> TestCase2: ', testCase2);
  console.log('>>> TestCase3: ', testCase3);
  console.log('>>> TestCase4: ', testCase4);
})();