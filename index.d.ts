interface User {
    id: string,
    username: string
}

import { Request, Response } from "express";


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
declare function getUser(token: string, id: string, req: Request, res: Response): Promise<User> | Promise<boolean>;

export = getUser;