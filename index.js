import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  console.log( req.body );
  console.log("This is server side" + " " + req.body["fName"]);
  console.log("This is server side" + " " + req.body["fName"].length);
  console.log("This is server side" + " " + req.body["lName"]);
  console.log("This is server side" + " " + req.body["lName"].length);
  const fName = req.body["fName"];
  console.log(fName);
  const lName = req.body["lName"];
  console.log(lName);
  const numLetters = fName.length + lName.length;
  console.log("This is server side" + " " + numLetters);
  res.render("index.ejs", { numberOfLetters: numLetters}, { firstName: fName }, { lastName: lName })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
