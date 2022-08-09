const express = require('express');

const port = 8000;

// importing the DataBase
const db = require('./config/mongoose');

//import schema from models/todo
const Todo = require('./models/todo');

const app = express();


// using static files
app.use(express.static("./views"));


// to use encrypted data
app.use(express.urlencoded());

//setup view engine
app.set('view engine', 'ejs');
app.set('views', './views')


//rendering the home page
app.get('/', function(req, res){
    Todo.find({},function(err, todo){
        if(err){
            console.log('Error in fetching Todo list from database');
            return;
        }
        return res.render('home',{ 
            title:"Todo List App",
            todo: todo
        });
        }   
)});

//creating the todo list
app.post('/create-todo', function(req, res){
        
      Todo.create({
          description: req.body.description,
          category: req.body.category,
          date: req.body.date
          }, function(err, newtodo){
          if(err){console.log('error in creating todo', err); return;}
          
  
          return res.redirect('back');
  
      });
  });



// deleting TODO
app.get('/delete-todo', function(req, res){
    // get the id from query
    var id = req.query;

    // checking the number of todo in list and select to delete
    var count = Object.keys(id).length;
    for(let i=0; i < count ; i++){
        
        // finding and deleting todo from the DB one by one using id
        Todo.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting todo');
            }
        })
    }
    return res.redirect('back'); 
});





app.listen(port,function(err){
    if(err){
        // console.log('Error', err);
        console.log(`Error in running the server : ${error}`)
    }
console.log(`server is running on port: ${port}`);


});