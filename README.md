# express-reauth

# IMPORTANT
Re-Auth has been shut down. This package will no longer work. You can read more on our [homepage](https://auth.redcrafter07.de). In case RedCrafter07 is going to release the sourcecode, it should work with your self-deployed api/website, after some personalizations (changing the urls)

It is confirmed, that RedCrafter07 didn't plan to release the source code

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
