var mongoose = require("mongoose");

var blogSchema = mongoose.Schema({
  blog_id: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  published_date: {
    type: String,
    required: false,
  },
  status: {
    type: Boolean,
    required: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
