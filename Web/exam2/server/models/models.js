const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const Users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, },
    password: { type: DataTypes.STRING },
})
const Videos = sequelize.define('videos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING },
    is_public: { type: DataTypes.BOOLEAN, defaultValue: false },
    url: { type: DataTypes.STRING },
});

const UsersVideos = sequelize.define('users_videos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const Categories = sequelize.define('categories', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, },
})
const PublicDeleted = sequelize.define('deleted_public_videos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

Users.hasMany(UsersVideos)
UsersVideos.belongsTo(Users)

Videos.hasMany(UsersVideos)
UsersVideos.belongsTo(Videos)

Categories.hasMany(Videos)
Videos.belongsTo(Categories)

Users.hasMany(PublicDeleted)
PublicDeleted.belongsTo(Users)

Videos.hasMany(PublicDeleted)
PublicDeleted.belongsTo(Videos)



module.exports = {
    Users,
    Videos,
    UsersVideos,
    Categories,
    PublicDeleted
}