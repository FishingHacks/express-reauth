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
 * ```app.get("/login", (req, res) => {
 * let user = getUser("<your-token>", "<your-id>", req, res);
 * if(!user) return;
 * //process
 * res.send("Authorized");
 * });```
*/
function getUser(token: string, id: string, req: Request, res: Response): User|boolean;