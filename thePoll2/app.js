const port = 7070;
const express = require("express");                         // Express engine
const app = express();                                     // Run application using Express
const expbs = require("express-handlebars");              // Express handlebards templating engine
const fs = require("fs");                                 // Node file handler API
const pathDb = "poll/database.json";
const bodyParser = require("body-parser");
let path = require("path");
let cjs = require("cjs");

/**  APPLICATION SETTINGS*/
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));        // Set Express fixed path to public directory                
app.set("view engine", "handlebars");                          // Set Handlebars as view-engine
app.engine(
  "handlebars",
  expbs({
  // Start Handlebars engine and set default layout page
    defaultLayout: "main"
  })
);

/** APPLICATION ROUTES */
app.get("/", function(req, resp) {
  // GET landing page
  try{
    resp.status(200).render("index", { title: "HOME" });
  }
  catch(err){
    resp.send("ERROR 404:"+ error.message);
    console.log("ERROR: "+ error.message);
  }
  /**''This is the application landing page' */
});

app.get("/vote", function(req, resp) {
  // GET LECTURER vote page
  try{
    resp.status(200).render("vote", {title: "POLL"});
    console.log("On vote page.");
  }
  catch(err){
    resp.send("ERROR 404:"+ error.message);
    console.log("ERROR: "+ error.message);
  }
  
});

app.get("/graph", function(req, resp) {
  // GET graph page
  resp.status(200).render("graph", { title: "GRAPH" });
});

app.get("/student", function(req, resp) {
  // GET graph page
  try{
    resp.status(200).render("student", { title: "STUDENT" });
    console.log("On student page");
}catch(err){
    console.log("Error loading page" + err.message);
}
});

app.post("/vote/voteAdd", function(req, res) {
  try{
    console.log(req.body);
    fs.writeFileSync(pathDb, JSON.stringify(req.body), err=>{
      if (err) throw err;
    });
    console.log('SUCCESS writting to database.json');
    }
    catch (err){
      console.log("FAILED TO CREATE POLL !!" + err.message);
    }
  });

app.get("/take-vote/1", function(req, resp){
  // GET poll page
      try{
        fs.readFileSync(pathDb, (err, data) => {
        if(err) throw err;
        var polls = JSON.parse(data);
      
        resp.status(200).render("takeVote", {title: polls[1].question });
        console.log("FILE SUCCESSFULLY READ !");
    });
    } catch(err){
      resp.status(404).send(err.message);
      console.log("FAILED TO READ FILE !");
  };
});

/** SERVER START*/
app.listen(port, () => console.log("Server is listening on port " + port));
