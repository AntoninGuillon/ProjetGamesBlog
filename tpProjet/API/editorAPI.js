//import
const express = require('express');
const editor = require('../models/editorModel.js');
const router = express.Router();

//route editor
router.get('/editor/:id', async(req, res)=>{
    const edtr = await editor.findById(req.params.id);
    res.render('../vues/editor.ejs', {edtr});
});

//delete editor
router.post('/editor/:id', async(req, res)=>{
    await editor.findByIdAndDelete(req.params.id);
    res.redirect('/editors');
});

//route modifyEditor
router.get('/modifyEditor:id', async(req, res)=>{
    const edtr = await editor.findById(req.params.id);
    res.render('../vues/modifyEditor.ejs', {edtr});
});

//update editor
router.post('/modifyEditor/:id', async(req, res)=>{
    const edtr = new editor;
    edtr.name = req.body.name;
    edtr.logo = req.body.logo;
    edtr.creationDate = req.body.creationDate;
    edtr.description = req.body.desc;
    edtr.link = req.body.link;
    await editor.findByIdAndUpdate(req.params.id, edtr);
    res.redirect('/editor');
});

//route newEditor
router.get('/newEditor', function(req, res){
    res.render('../vues/newEditor.ejs');
});

//create editor
router.post('/newEditor', function(req, res){
    const date = Date.now();
    let edtr = new editor({name: req.body.name, logo: req.body.logo, creationDate: req.body.creationDate, description: req.body.desc, linkSociete: req.body.linkSociete, dateArticle: date});
    edtr.save();
    res.redirect('/editors');
});

module.exports = router;