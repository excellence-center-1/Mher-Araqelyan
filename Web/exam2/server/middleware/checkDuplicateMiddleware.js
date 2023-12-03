const ApiError = require('../error/ApiError');
const { Users } = require("../models/models");
const checkDuplicateMiddleware = (getVideos, getPublicVideos) => async (req, res, next) => {
    try {
        const email = req.user.email;
        const user = await Users.findOne({
            where: { email: email },
        });
        const { title, url, category } = req.body;
        const userVideos = await getVideos(user.id, category);
        const publicVideos = await getPublicVideos(user.id, category);
        const isDuplicate = () => {
            let isDuplicate = false;
            const checkDuplicate = (video) => {
              return video.title === title && video.url === url;
            };
            const userDuplicate = userVideos.find(checkDuplicate);
            if (userDuplicate) {
              isDuplicate = true;
            }
            const publicDuplicate = publicVideos.find(checkDuplicate);
            if (publicDuplicate) {
              isDuplicate = true;
            }
            return isDuplicate;
          };
        if (isDuplicate()) {
            return res.status(400).json({ message: "Video with the same title and URL already exists." });
        }
        req.user.id=user.id;
        console.log(req.user);
        next();
    } catch (error) {
        console.error(error);
        return next(ApiError.internal('Internal server error'));
    }
};

module.exports = checkDuplicateMiddleware;
