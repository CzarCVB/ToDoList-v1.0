//express
const express = require('express');
const app = express();

//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const date = require(__dirname + '/date.js');

//ejs & static styles
app.set("view engine", "ejs");
app.use(express.static("public"));

//todo array
const todo = ["Complete Web-Dev", "Finish Android App", "Finish College Assignments"];


//get reqs
app.get("/", function(req,res){

    const day = date.getDate();

    res.render("lists", {
        day:day,
        todo:todo
    });

});

app.post("/", function(req,res){
    
    const item = req.body.newTodo;
    todo.push(item);
    res.redirect("/");
});

//server
app.listen(3000, function(){
   console.log("Curtains Up!")
});
