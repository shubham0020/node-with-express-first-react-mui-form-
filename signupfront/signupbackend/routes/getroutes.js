//const {response} = require('express')

const express = require('express');
const router = express.Router();

const userModel = require('../models/userModels');


 
router.get('/', function(request, response) {
    userModel.find((err, docs) => {
        if (!err) {
            response.json(docs)
            
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    }).limit(2).sort({_id : 1});
    
 
});


module.exports = router