const { Categories } = require("../models/models");
const ApiError = require("../error/ApiError");

class CategoryController {
  async getAll(req, res,next) {
    try {
      const categories = await Categories.findAll();
      return res.json(categories);
    } catch (error) {
      console.error("Error while fetching categories:", error);
      return next(ApiError.internal('user with this email not found'))
    }
  }
}

module.exports = new CategoryController();
