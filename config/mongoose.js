//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todos');

//acquire the connection (to check if it is succesfull)
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console,'error conecting to db'));

//up and running then print the message(when connection is suceesfull)
db.once('open', function(){
    console.log('successfully connected to the database');
});


