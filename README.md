# express-reauth

This is build on top of the [ReAuthAPI](https://github.com/RedCrafter07/Re-Auth-API) für [ReAuth](https://auth.redcrafter07.de/)

usage:
```javascript
app.get("/login", (req, res) => {
let user = getUser("<your-token>", "<your-id>", req, res);
if(!user) return;
//process
res.send("Authorized");
});
```
