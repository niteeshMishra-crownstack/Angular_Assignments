//This file will handle connection logic to the mongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
    console.log("Connected to mongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB")
    console.log(e)
})

//To prevent deprectation warning (from MongoDB native Driver)

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

module.exports = {
    mongoose
};