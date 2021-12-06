const mongoose = require('mongoose');

const editorSchema = new mongoose.Schema({
    name: String,
    linkLogo: String,
    creationDate: String,
    description: String,
    linkSociete: String,
    dateArticle: Date
});

const editorModel = mongoose.model('editor', editorSchema);

module.exports = editorModel;