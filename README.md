# express-reauth

This is build on top of the [ReAuthAPI](https://github.com/RedCrafter07/Re-Auth-API) for [ReAuth](https://auth.redcrafter07.de/) by [RedCrafter07](https://github.com/RedCrafter07/)

usage:
```javascript
app.get("/login", (req, res) => {
let user = getUser("<your-token>", "<your-id>", req, res);
if(!user) return;
//process
res.send("Authorized");
});
```

please note, that you need to set /login to the redirect url of your application
