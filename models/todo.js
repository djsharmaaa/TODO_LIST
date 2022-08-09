const mongoose = require('mongoose');


//schema for Todo

const todoSchema = new mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {  
        type: Date,
        required: true

    }

});


const Todo = mongoose.model('Todo', todoSchema);


// export the schema

module.exports = Todo;