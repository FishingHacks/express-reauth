const reauth = require("./index");
const express = require("express");

let app = express();

app.get("/login", async (req, res) => {
  try {
  let user = await reauth.getUser(
    "<token of you app>",
    "<id of your app>",
    req,
    res
    );
    if (!user) return;
    res.json(user);
  }
  catch {
    return res.redirect("/");
  }
});

app.listen(80);