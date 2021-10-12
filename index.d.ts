declare namespace versionCheck2Function {
  interface Return {
    status: string;
    data?: {
      packageExists: boolean;
      versionExists: boolean;
      latestVersion: string;
    };
    message?: any;
  }
}

declare const versionCheck2: {
  /**
   *
   * @param {*} packageName = NPM Package name, should be string
   * @param {*} version     = NPM Package version, should be string
   */
  (packageName: string, version: string): Promise<versionCheck2Function.Return>;
  default: typeof versionCheck2;
};

export = versionCheck2;
