const { Categories } = require("../models/models")

class CategoryController {
    
    async getAll(req, res) {
        const categories = await Categories.findAll()
        return res.json(categories)
    }

}

module.exports = new CategoryController()