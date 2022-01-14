# express-reauth

This is build on top of the [ReAuthAPI](https://github.com/RedCrafter07/Re-Auth-API) for [ReAuth](https://auth.redcrafter07.de/) by [RedCrafter07](https://github.com/RedCrafter07/)

usage:
```javascript
app.get("/login", async (req, res) => {
    try {
        let user = await getUser("<your-token>", "<your-id>", req, res);
    }
    catch {
        return res.send("Unauthorized");
    }
    if(!user) return;
    //process
    res.send("Authorized");
});
```

re-auth-api:
```js
reauthExpress.api;
```

new Functions:
```js
getSettings(token);
getSetting(token, JSONPath);
deleteSetting(token(, JSONPath));
setSetting(token(, JSONPath));
getCSRFToken(token);
deleteCSRFToken(CSRFToken);
getInfos(applicationID);
```

please note, that you need to set /login to the redirect url of your application

```
npm i reauth-express
```

[NPM Package](https://www.npmjs.com/package/reauth-express)
