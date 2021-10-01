'use strict'
const fetch = require('node-fetch');
const registryAuthToken = require('registry-auth-token');
const semver = require('semver');

/**
 * 
 * @param {*} packageName = NPM Package name, should be string
 * @param {*} version     = NPM Package version, should be string
 */
const versionCheck2 = async (packageName, version) => {
  const npmRegistryURL = 'https://registry.npmjs.org';
  const auth = registryAuthToken(npmRegistryURL, {recursive: true});

  const headers = {
    'accept': '*/*',
    'content-type': 'application/json',
  }

  if (!!auth) {
    headers['authorization'] = `${auth.type} ${auth.token}`;
  }

  try {
    version = (!!version && typeof(version) === 'string') ? version.toLowerCase() : 'latest';
    packageName = (!!packageName && typeof(packageName) === 'string') ? packageName.toLowerCase() : '';

    if (
      !(semver.maxSatisfying(
        [version],
        '*',
        {
          includePrerelease: true
        }
      )) && version !== 'latest'
    ) {
      throw new Error(`Version ${version} is invalid, should using semver`);
    }

    const response = await fetch(
      `${npmRegistryURL}/${packageName}/${version}`,
      {
        headers,
        method: 'GET'
      }
    );

    const responseData = {
      requestVerison: await response.json(),
      latestVersion: null
    };
    const responseStatus = {
      requestVersion: parseInt(response.status, 0),
      latestVersion: null
    };

    let latestResponse = null;
    if (version !== 'latest') {
      latestResponse = await fetch(
        `${npmRegistryURL}/${packageName}/latest`,
        {
          headers,
          method: 'GET'
        }
      );

      responseData.latestVersion = await latestResponse.json();
      responseStatus.latestVersion = parseInt(latestResponse.status, 0);
    } else {
      responseData.latestVersion = responseData.requestVerison;
      responseStatus.latestVersion = responseStatus.requestVersion;
    }

    if (
      (
        responseStatus.requestVersion >= 200 &&
        responseStatus.requestVersion < 300
      ) || responseStatus.requestVersion === 404
    ) {
      return {
        status: 'success',
        data: {
          packageExists: (responseStatus.latestVersion === 404) ? false : true,
          versionExists: (responseStatus.requestVersion === 404) ? false : true,
          latestVersion: (responseStatus.latestVersion === 404) ? 'no.package.found' : responseData.latestVersion.version
        }
      };
    } else {
      throw new Error(`Response error: ${responseData.requestVerison}`);
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message
    }
  }
};

module.exports = versionCheck2;
module.exports.default = versionCheck2;