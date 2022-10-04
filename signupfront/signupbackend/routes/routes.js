const {response} = require('express');

const express = require('express');
const router = express.Router();
const User = require('../models/signUpModels','../models/userModels');




 router.post('/signup', (request, response) =>{
     const signedUpUser =  new User({
        
         fullName:request.body.fullName,
         username:request.body.username,
         email:request.body.email,
         password:request.body.password

     })
    

     signedUpUser.save()
     .then(data =>{
         response.json(data)
     })
    .catch(error => {
        response.json(error)  
     })
        
 });




router.get('/users', function(request, response) {
    User.find((err, docs) => {
        if (!err) {
            response.json(docs)
            
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    }).limit(15).sort({_id : -1});
    
 
});


module.exports = router