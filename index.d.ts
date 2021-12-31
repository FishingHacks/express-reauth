declare interface User {
    username: string,
    id: string
}

interface User {
    token: string,
    username: string
}

declare class ret {
    api(token: string, id: string): api;
    constructor();
    /**
 * Return a User, than handle or false, than do nothing
 * 
 * params: token (Re-Auth token), id (Re-Auth id), req (request to "/login"), res (response for "/login")
 * 
 * example:
 * 
 * ```app.get("/login", async (req, res) => {
 * try {
 * let user = await getUser("<your-token>", "<your-id>", req, res);
 * }
 * catch {
 * return res.send("Unauthorized");
 * }
 * if(!user) return;
 * //process
 * res.send("Authorized");
 * });```
*/
    getUser(token: string, id: string, req: Request, res: Response): Promise<User> | Promise<boolean>;

    getUserSettings(id: string): any;
    getUserSetting(id: string, path: string): any;
    setUserSetting(id: string, path: string): void;
    deleteUserSetting(id: string, JSONPath: string);
    getCSRFToken(id: string);
    deleteCSRFToken(id: string);
}

export = new ret();