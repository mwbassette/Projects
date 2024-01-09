//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var secretPassword = "ILoveProgramming";

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

function checkPassword(req, res, next) {
    console.log(req.body["password"]);
    if (req.body["password"] === secretPassword) {
        app.post("/check", (req, res) => {
            res.sendFile(__dirname + "/public/secret.html");
            console.log("Secrets Sent!");
          });
        next();
    } else {
        res.redirect("/");
        };
        next();
}

app.use(checkPassword);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
