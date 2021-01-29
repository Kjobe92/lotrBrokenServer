//'You cannot pass. The dark fire will not avail you, flame of Udûn. Go back to the Shadow!' -Gandalf
module.exports = (sequelize, DataTypes) => {
    const Lotr = sequelize.define('lotr', {
        bookTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        synopsis: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })
    return Lotr;
}