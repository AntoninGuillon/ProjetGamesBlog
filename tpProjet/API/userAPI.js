//import
const express = require('express');
const router = express.Router();
const user = require('../models/userModel.js');
const sha256 = require('js-sha256');

//delete user by admin
router.post('/users/:id', async(req, res)=>{
    await user.findByIdAndDelete(req.params.id);
    res.redirect('/users');
});

//delete user by itself
router.post('/user/:id', async(req, res)=>{
    await user.findByIdAndDelete(req.params.id);
    res.redirect('/home');
});

//create user
router.post('/newUser', function(req, res){
    let usr = new user({userName: req.body.userName, mail: req.body.mail, password: req.body.password});
    usr.password = sha256.hmac('31', 'usr.password');
    usr.save();
    res.redirect('/home');
});

//route modifyUser
router.get('/modifyUser/:id', async(req, res)=>{
    const usr = await user.findById(req.params.id);
    res.render('../vues/modifyUser.ejs', {usr});
});

//update user
router.post('/modifyUser/:id', async(req, res)=>{
    const usr = new user;
    usr.userName = req.body.userName;
    usr.mail = req.body.mail;
    
    if(usr.password == sha256.hmac('31', 'req.body.password')){
        usrReturned = await user.findByIdAndUpdate(req.params.id, usr);
        alert('modifications enregistrés');
        res.render('../vues/profil.ejs', {usrReturned});
    }else{
        const usrReturned = await user.findById(req.params.id);
        alert('mot de passe erroné');
        res.render('../vues/modifyUser.ejs', {usrReturned});
    }
});

//route newUser
router.get('/newUser', function(req, res){
    res.render('../vues/newUser.ejs');
});

module.exports = router;