async function getUser(token, id, req, res) {
    if (req.query.unauthorized) {
        res.redirect("/");
        return false;
    }
    if (req.query.secret) {
        return await require("re-auth-api")(token, id).getUser(req.query.secret);
    }
    res.redirect(`https://auth.redcrafter07.de/auth/${id}`);
    return false;
}

modules.exports = getUser;