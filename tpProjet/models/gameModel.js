const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: String,
    type: String,
    theme: String,
    editor: String,
    release: String,
    dlc: String,
    description: String,
    imgLink: String,
    dateArticle: Date
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;