//import
const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const http = require("http");
const ejs = require("ejs");
const nav = require('./API/navAPI');
const game = require('./API/gameAPI');
const edtr = require('./API/editorAPI');
const usr = require('./API/userAPI');
const editor = require('./models/editorModel');

const app = express();
const port = 3000;

//set connection mongo GamingWebsiteDB
mongoose.connect('mongodb://127.0.0.1:27017/GamingWebSiteDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;

//definition d'une zone public
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

//déinition des routes
app.use('/', nav);
app.use('/', game);
app.use('/', usr);
app.use('/', edtr);

//jeu de donnée
/*const e = new editor({name:"Mojang", linkLogo:"../assets/img/editor/mojang.jpg", creationDate: "Mai 2009", description:"Mojang Studios est un studio suédois de jeux vidéo, fondé en mai 2009 sous la dénomination Mojang Specifications par Markus Persson alias « Notch », Carl Manneh et Jakob Porsér. Mojang Studios est principalement connu pour avoir créé le jeu Minecraft.", linkSociete:"https://www.societe.com/societe/mojang-ab-789542651.html", dateArticle: new Date()});
const d = new editor({name:"Rare", linkLogo:"../assets/img/editor/rare.jpg", creationDate:"1982", description:"Rare Ltd, également connue sous la marque commerciale Rareware, est une société britannique de développement de jeux vidéo fondée en 1982 sous le nom d'Ultimate Play the Game' par Tim et Chris Stamper qui se renommèrent plus tard Rare en 1985, appartenant à Microsoft Studios depuis 2002.", dateArticle: new Date()});
const i = new editor({name:"Bethesda", linkLogo:"../assets/img/editor/bethesda.jpg", creationDate:"Juin 1986", description:"Bethesda Softworks, LLC, fondée en 1986, est une compagnie américaine de jeux vidéo et principale filiale du groupe ZeniMax Media, ce dernier ayant été créé par les fondateurs de Bethesda.", linkSociete:"https://www.societe.com/etablissement/bethesda-softworks-france-52765458600025.html", dateArticle: new Date()});
const t = new editor({name:"Riot Games", linkLogo:"../assets/img/editor/riot.jpg", creationDate: "Septembre 2006", description:"Riot Games est une entreprise américaine d'édition et de développement de jeux vidéo fondée en 2006 et située à Los Angeles, en Californie. Elle organise aussi plusieurs tournois de sport électronique.", linkSociete:"https://www.societe.com/societe/riot-games-services-sas-820648681.html", dateArticle: new Date()});
const o = new editor({name:"Gamefreak", linkLogo:"../assets/img/editor/gamefreak.jpg", creationDate:"Avril 1989", description:"Game Freak, Inc. est une société japonaise de développement de jeux vidéo fondée le 26 avril 1989 à Tokyo. Elle est notamment à l'origine des jeux de la série Pokémon.", dateArticle: new Date()});
const r = new editor({name:"Electronic Arts", linkLogo:"../assets/img/editor/ea.jpg", creationDate:"Mai 1982", description:"Electronic Arts ou EA est une société américaine fondée le 28 mai 1982 et dont le siège se situe à Redwood City en Californie. EA est l'un des principaux développeurs et producteurs mondiaux de jeux vidéo.", dateArticle: new Date()});
e.save();
d.save();
i.save();
t.save();
o.save();
r.save();*/

//mise en écoute du serveur
app.listen(port, ()=>{
    console.log(`Express app listening at http://localhost:${port}`);
});

db.on('error', console.error.bind(console, 'MongoDB connection error: '));
