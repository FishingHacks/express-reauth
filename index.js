const API = require("./api");

async function getUser(token, id, req, res) {
    if (req.query.unauthorized) {
        res.redirect("/");
        return false;
    }
    if (req.query.secret) {
        return await new API(id, token).getUser(req.query.secret);
    }
    res.redirect(`https://auth.redcrafter07.de/auth/${id}`);
    return false;
}

module.exports = getUser;