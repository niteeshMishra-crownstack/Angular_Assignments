const express = require("express");
const cors = require("cors")
const app = express();
require('./db/mongoose'); //for db connection
//const bodyParser = require('body-parser');

//Load in the mongoose models

const { List, Task } = require('./db/models');

//Load middleware
app.use(express.json());
// 


let corsOption = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "exposedHeaders": 'x-access-token, x-refresh-token'
}
app.use(cors(corsOption))

// Route handlers

//List Routes

/*
GET/lists
Purpose: Get all lista
*/



app.get('/lists', (req, res) => {
    // we want to return an array of all the lists in database
    List.find({}).then((lists) => {
        res.send(lists);


    })


});

/*
Post/lists
Purpose:Create a list
*/
app.post('/lists', (req, res) => {
    // we want to create a new list and return the new list document back to the user (which includes the id)
    //The list information will be passed in via JSON request body

    let title = req.body.title
    let newList = new List({ title });

    newList.save().then(listDoc => {
        //the full list document is returned(incl id)
        res.send(listDoc)
    })

})

/*
PATH/lists/:id
Purpose:Update a specified list
*/
app.patch('/lists/:id', (req, res) => {
    //we want to update the specified list (list document with id in the url) with the new values specified in the JSON body
    List.findOneAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200)
    })
})


/*
DELETE/lists/:id
Purpose:Update a specified list
*/
app.delete('/lists/:id', (req, res) => {
    //we want to delete the specified list (list document with id in the url) 

    List.findOneAndDelete({ _id: req.params.id }).then((removedListDoc) => {
        res.send(removedListDoc)
    })
})

/*
GET/lists/:listId/tasks
Purpose: Get all tasks in a specific list
*/
app.get('/lists/:listId/tasks', (req, res) => {
    //we want to return all the tasks that belong to a specific list (specified by listId)

    Task.find({
        _listId: req.params.listId
    }).then((tasks) => {
        res.send(tasks);
    })
});


app.get('/lists/:listId/tasks/:taskId', (req, res) => {
        Task.findOne({
            _id: req.param.taskId,
            _listId: req.params.listId
        }).then((task) => {
            res.send(task)
        })
    })
    /*

      POST/lists/:listId

      Purpose :Create a new task in a specific list
    */

app.post('/lists/:listId/tasks', (req, res) => {
    //We want to create a new task in a list specified  by listId
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc)

    })
});

/*
*PATCH /lists/:listId/tasks/:taskId
Purpose: update an existing task
*/

app.patch('/lists/:listId/tasks/:taskId', (res, req) => {
    //We want to update an existing task (specified by taskId)
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _listId: req.params.listId
    }, {
        $set: req.body
    }).then(() => {
        res.send({ message: "Updated Successfully" })
    })
})

/*
Delete /lists/:listId/tasks/:
*/

app.delete('/lists/:listId/tasks/:taskId', (req, res) => {
    Task.findOneAndRemove({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((removedTaskDoc) => {
        res.send(removedTaskDoc)
    })
})











app.listen(3000, () => {
    console.log("server is listening on port 3000");
})