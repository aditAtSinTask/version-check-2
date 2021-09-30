/**
 *
 * @param {*} packageName = NPM Package name, should be string
 * @param {*} version     = NPM Package version, should be string
 */
declare namespace versionCheck2 {
  interface Return {
    status: string,
    data?: {
      exists: boolean,
      latestVersion: string
    },
    message?: any
  }
}

declare const versionCheck2: {
  (packageName: string, version: string): Promise<versionCheck2.Return>;
  default: typeof versionCheck2;
}

export = versionCheck2;