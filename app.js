const express = require('express');
const cors = require('cors');
const home = require('./api/routes/home');
const languages = require('./api/routes/languages');
const technology = require('./api/routes/technologies');
const works = require('./api/routes/works');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors({
    origin: "*"
}));
app.use('/', home);
app.use('/api/language', languages);
app.use('/api/technology', technology);
app.use('/api/works', works);

mongoose.connect('mongodb://atlasadmin:internationalhackers@api-portfolio-shard-00-00.5u2py.mongodb.net:27017,api-portfolio-shard-00-01.5u2py.mongodb.net:27017,api-portfolio-shard-00-02.5u2py.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-nu3c4u-shard-0&authSource=admin&retryWrites=true&w=majority').then(() => console.log('Connected to MongoDB!')).catch(err => console.error("Failed to connect database!", err));

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on ${port}`));