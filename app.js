//One does not simply...write code without Bugs...
require('dotenv').config();
let express = require('express'); 
let sequelize = require('./db');


let lotr = require('./controllers/lotrcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();
app.use(require('./middleware/headers'));

app.use(express.json());


app.use('/lotr');
app.use('/user', user);



app.listen(3001, () => {
    console.log("Gollum is listening on port 3001");
});