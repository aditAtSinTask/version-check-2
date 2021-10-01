# Version Check 2

Check the version of an NPM Package

## Install

```
$ npm install version-check-2
```

## Example

This example tested when the latest version of 'version-check-2' is '0.1.0'

```js
import versionCheck2 from 'version-check-2';

console.log(await versionCheck2('version-check-2', '0.0.11'));
/* 
{
  status: 'success',
  data: {
    packageExists: true,
    versionExists: true,
    latestVersion: '0.1.0' 
  }
}
*/

console.log(await versionCheck2('version-check-2', '0.0.5'));
/* 
{
  status: 'success',
  data: {
    packageExists: true,
    versionExists: false,
    latestVersion: '0.1.0' 
  }
}
*/

console.log(await versionCheck2('version-check-2s', '0.0.12'));
/* 
{
  status: 'success',
  data: {
    packageExists: false,
    versionExists: false,
    latestVersion: 'no.package.found' 
  }
}
*/

console.log(await versionCheck2('version-check-2', 'latest'));
/* 
{
  status: 'success',
  data: {
    packageExists: true,
    versionExists: true,
    latestVersion: '0.1.0' 
  }
}
*/

console.log(await versionCheck2('version-check-2', '1.not-semver'));
/* 
{
  status: 'error',
  message: 'Version 1.not-semver is invalid, should using semver' 
}
*/
```
