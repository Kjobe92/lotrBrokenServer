//'He that breaks a thing, to find out what it is, has left the path of wisdom.'-Gandalf

const Sequelize = require('sequelize');
const sequelize = new Sequelize('lotr-brokenserver', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
 });

 sequelize().then(
    function() {
        console.log('Connected to lotr-brokenserver postgres database');
    },
    function(err) {
        console.log(err);
    }
);
module.exports = sequelize; 