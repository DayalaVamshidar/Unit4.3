const BaseController = require("./baseController");
const BlogModel = require("../models/blogModel");
class Blog extends BaseController {
  constructor() {
    super(Blog, BlogModel);
  }
}
module.exports = new Blog();
