//import
const express = require('express');
const game = require('../models/gameModel.js');
const router = express.Router();

//route game
router.get('/game/:id', async(req, res)=>{
    const jeu = await game.findById(req.params.id);
    res.render('../vues/game.ejs', {jeu});
});

//delete game
router.post('/game/:id', async(req, res)=>{
    await game.findByIdAndDelete(req.params.id);
    res.redirect('/games');
});

//route modifyGame
router.get('/modifyGame:id', async(req, res)=>{
    const jeu = await game.findById(req.params.id);
    res.render('../vues/modifyGame.ejs', {jeu});
});

//update game
router.post('/modifyGame/:id', async(req, res)=>{
    const jeu = new game;
    jeu.title = req.body.title;
    jeu.type = req.body.type;
    jeu.theme = req.body.theme;
    jeu.editor = req.body.editor;
    jeu.release = req.body.release;
    jeu.dlc = req.body.dlc;
    jeu.description = req.body.desc;
    await game.findByIdAndUpdate(req.params.id, jeu);
    res.redirect('/games');
});

//route newGame
router.get('/newGame', function(req, res){
    res.render('../vues/newGame.ejs');
});

//create game
router.post('/newGame', function(req, res){
    const date = Date.now();
    let jeu = new game({title: req.body.title, type: req.body.type, theme: req.body.theme, editor: req.body.editor, release: req.body.release, dlc: req.body.dlc, description: req.body.desc, dateArticle: date});
    jeu.save();
    res.redirect('/games');
});

module.exports = router;