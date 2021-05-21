const express = require("express");
const app = express();
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');

//Load in the mongoose models

const { List, Task } = require('./db/models');

//Load middleware
app.use(bodyParser.json());

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







app.listen(3000, () => {
    console.log("server is listening on port 3000")
})