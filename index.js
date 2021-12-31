const API = require("./api");
const Enmap = require("enmap");
const utils = require("./utils");

let db = null;

function api(token, id) {
    return new API(id, token);
}

async function getUser(token, id, req, res) {
    if (req.query.unauthorized) {
        res.redirect("/");
        return false;
    }
    if (req.query.secret) {
        user = await new API(id, token).getUser(req.query.secret);
        db.set("tokens", user, user.id);
        return {
            token: user.id,
            username: user.username
        };
    }
    res.redirect(`https://auth.redcrafter07.de/auth/${id}`);
    return false;
}

function getSettings(id) {
    if (!db.has("SETTINGS", id)) {
        return {};
    }
    return db.get("SETTINGS", id);
}

function getSetting(id, JSONPath) {
    if (!db.has("SETTINGS", id + "." + JSONPath)) {
        return {};
    }
    return db.get("SETTINGS", id + "." + JSONPath);
}

function setSetting(id, JSONPath, setting) {
    db.set("SETTINGS", setting, id + "." + JSONPath);
}

function deleteSetting(id) {
    db.delete("SETTINGS", id);
}

function deleteSetting(id, token) {
    if (token != undefined && token != null) token = "." + token;
    db.delete("SETTINGS", id + (token?token:""));
}

function getCSRFToken(id) {
    token = utils.getRandomUUID(40);
    while (db.has("CSRFT", token)) {
        token = utils.getRandomUUID(40);
    }
    db.set("CSRFT", id, token);
    return token;
}

function deleteCSRFToken(id) {
    db.delete("CSRFT", id);
}

function setupDB() {
    db = new Enmap({
        name: "REAUTH_DB",
        autoFetch: true,
        fetchAll: false,
    });
    if (!db.has("SETTINGS")) {
        db.ensure("SETTINGS", {});
    }
    if (!db.has("CSRFT")) {
        db.ensure("CSRFT", {});
    }
    return {
        getUser,
        getSettings,
        getSetting,
        setSetting,
        deleteSetting,
        getCSRFToken,
        deleteCSRFToken,
        api,
        getInfos: api.getInfos
    }
}

module.exports = setupDB();