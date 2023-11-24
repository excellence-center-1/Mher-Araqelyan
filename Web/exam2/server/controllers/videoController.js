const { Videos } = require("../models/models");
const { Users } = require("../models/models");
const { UsersVideos } = require("../models/models");
const { Categories } = require("../models/models");
const { PublicDeleted } = require("../models/models");
const { Sequelize, where } = require("sequelize");
const ApiError = require("../error/ApiError");

class VideoController {
  async getVideos(user_id, category) {
    const userVideosQuery = {
      where: { userId: user_id },
      attributes: [
        [Sequelize.col('video.id'), 'id'],
        [Sequelize.col('video.title'), 'title'],
        [Sequelize.col('video.is_public'), 'is_public'],
        [Sequelize.col('video.url'), 'url'],
        [Sequelize.col('video.category.name'), 'category'],
      ],
      include: [
        {
          model: Videos,
          attributes: [],
          as: 'video',
          where: {},
          include: [
            {
              model: Categories,
              attributes: [],
              as: 'category',
              where: {

              },
            },
          ],
        },
      ],
      raw: true,
    };
    if (category && category !== "All") {
      userVideosQuery.include[0].include[0].where.name = category;
    }
    const user_videos = await UsersVideos.findAll(userVideosQuery);
    return user_videos;
  }
  create = async (req, res, next) => {
    try {
      const email = req.user.email
      const { title, category, url } = req.body
      const user = await Users.findOne({
        where: { email: email },
      })
      const videos = await this.getVideos(user.id, category);
      let isDuplicate = false;
      videos.forEach(video => {
        if (video.title === title && video.url === url) {
          isDuplicate = true;
        }
      });
      if (isDuplicate) {
        return res.status(400).json({ message: "Video with the same title and URL already exists." });
      }
      const categoryobj = await Categories.findOne({
        where: { name: category }
      })
      const video = await Videos.create({ title: title, url: url, categoryId: categoryobj.id })
      const user_video = await UsersVideos.create({ userId: user.id, videoId: video.id })
      return res.json(video)
    }
    catch (error) {
      console.error(error);
      return next(ApiError.internal('Internal Server Error'));
    }
  }

  delete = async (req, res, next) => {
    try {
      const email = req.user.email;
      const { videoId } = req.query;
      const video = await Videos.findOne({
        where: { id: videoId },
      })
      const user = await Users.findOne({
        where: { email: email },
      })
      if (!video.is_public) {
        await UsersVideos.destroy({
          where: {
            userId: user.id,
            videoId: videoId,
          },
        });
        const deletedVideo = await Videos.destroy({
          where: {
            id: videoId,
          },
        });
        if (deletedVideo === 0) {
          return res.status(404).json({ message: "Video not found." });
        }
        return res.json({ message: "Video deleted successfully." });
      } else {
        const public_deleted = await PublicDeleted.create({ userId: user.id, videoId: video.id });
        return res.json({ message: "Video deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      return next(ApiError.internal('Internal Server Error'));
    }
  }


  getAll = async (req, res, next) => {
    try {
      const { category } = req.query;
      const email = req.user.email;
      const user = await Users.findOne({
        where: { email: email },
      });
      const publicDeletedVideoIds = await PublicDeleted.findAll({
        attributes: ['videoId'],
        where: { userId: user.id },
        raw: true,
      });
      const excludedVideoIds = publicDeletedVideoIds.map(item => item.videoId);

      const publicVideosQuery = {
        where: {
          is_public: true,
          id: {
            [Sequelize.Op.notIn]: excludedVideoIds,
          },
        },
        attributes: [
          'id',
          'title',
          'is_public',
          'url',
          [Sequelize.col('category.name'), 'category'],
        ],
        include: [
          {
            model: Categories,
            attributes: [],
            as: 'category',
            where: {},
          },
        ],
        raw: true,
      };

      if (category && category !== "All") {
        publicVideosQuery.include[0].where.name = category;
      }
      const userVideos = await this.getVideos(user.id, category)
      const publicVideos = await Videos.findAll(publicVideosQuery);
      const allVideos = [...userVideos, ...publicVideos];
      return res.json(allVideos);
    } catch (error) {
      console.error(error);
      return next(ApiError.internal('Internal Server Error'));
    }
  }
  edit = async (req, res, next) => {
    try {
      const { id, title, category, url } = req.body;
      const email = req.user.email;
      const user = await Users.findOne({
        where: { email: email },
      });
      const videos = await this.getVideos(user.id, category);
      let isDuplicate = false;
      videos.forEach(video => {
        if (video.title === title && video.url === url) {
          isDuplicate = true;
        }
      });
      if (isDuplicate) {
        return res.status(400).json({ message: "Video with the same title and URL already exists." });
      }
      const video = await Videos.findOne({
        where: { id: id },
      });
      if (!video.is_public) {
        const categoryObj = await Categories.findOne({
          where: { name: category },
        });
        await Videos.update(
          { title: title, categoryId: categoryObj.id, url: url },
          { where: { id: id } }
        );
        return res.status(200).json({ message: "Video updated successfully" });
      }
      else {
        return next(ApiError.badRequest('Video is public'));
      }
    } catch (error) {
      console.error(error);
      return next(ApiError.internal('Internal server error'));
    }
  }

}

module.exports = new VideoController()