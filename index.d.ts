/**
 *
 * @param {*} packageName = NPM Package name, should be string
 * @param {*} version     = NPM Package version, should be string
 */
export default function versionCheck(packageName: string, version?: string): Promise<{
    status: string;
    data: {
        exists: boolean;
        latestVersion: any;
    };
    message?: undefined;
} | {
    status: string;
    message: any;
    data?: undefined;
}>;
