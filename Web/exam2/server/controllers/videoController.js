const { Videos } = require('../models/models')
const { Users } = require('../models/models')
const { UsersVideos } = require('../models/models')
const { Sequelize, where } = require('sequelize');
const ApiError = require('../error/ApiError');

class VideoController {
  async create(req, res) {
    const email = req.user.email
    const { title, category, url } = req.body
    const video = await Videos.create({ title, category, url })
    const user = await Users.findOne({
      where: { email: email },
    })
    const user_video = await UsersVideos.create({ userId: user.id, videoId: video.id })
    return res.json(video)
  }

  async getAll(req, res, next) {
    try {
      const { category } = req.query;
      console.log(category);
      const email = req.user.email;
      const user = await Users.findOne({
        where: { email: email },
      });
      console.log("userid=", user.id);
  
      const userVideosQuery = {
        where: { userId: user.id },
        attributes: [
          [Sequelize.col('video.id'), 'id'],
          [Sequelize.col('video.title'), 'title'],
          [Sequelize.col('video.category'), 'category'],
          [Sequelize.col('video.is_public'), 'is_public'],
          [Sequelize.col('video.url'), 'url'],
        ],
        include: [
          {
            model: Videos,
            attributes: [],
            as: 'video',
            where: {},
          },
        ],
      };

      const publicVideosQuery = {
        where: { is_public: true },
      };

      if (category && category!== "All") {
        userVideosQuery.include[0].where.category = category;
        publicVideosQuery.where.category = category;
      }
  
      const userVideos = await UsersVideos.findAll(userVideosQuery);
      
      const publicVideos = await Videos.findAll(publicVideosQuery);
  
      const allVideos = [...userVideos, ...publicVideos];
      return res.json(allVideos);
    } catch (error) {
      console.error(error);
      return next(ApiError.internal('Internal Server Error'));
    }
  }
  

}
module.exports = new VideoController()