//import
const express = require('express');
const game = require('../models/gameModel.js');
const editor = require('../models/editorModel.js');
const router = express.Router();
const user = require('../models/userModel.js');

//route home
router.get('/', async (req, res) => {
    const gameTab = await game.find({});//mettre une condition pour n'afficher que les plus récents
    res.render('../vues/home.ejs', {gameTab});
});

//route games
router.get('/games', async(req, res)=>{
    const gameTab = await game.find({});
    res.render('../vues/games.ejs', {gameTab});
});

//route editors
router.get('/editors', async(req, res)=> {
    const editorTab = await editor.find({});
    res.render('../vues/editors.ejs', {editorTab});
});

//route userProfil
router.get('/profil/:id', async(req, res)=> {
    const currentUser = await user.findById(req.params.id);
    res.render('../vues/profil.ejs', {currentUser});
});

//route users
router.get('/users', async(req, res)=> {
    const userTab = await user.find({});
    res.render('../vues/users.ejs', {userTab});
});

//route login
router.get('/login', function(req, res){
    res.render('../vues/login.ejs');
})

module.exports = router;