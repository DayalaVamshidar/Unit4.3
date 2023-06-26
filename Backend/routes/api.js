var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");
const blogController = require("../controllers/blogController");

router.post("/add-blog", async (req, res) => {
  data = req.body;
  data.blog_id = uuidv4();
  blogController.create(data, (err, blogResponse) => {
    if (err) {
      return res.send({ response: err });
    }
    res.send({
      response: blogResponse,
    });
  });
});

router.post("/update-blog", (req, res) => {
  let data = req.body;
  blogController.findOneAndUpdate(
    { blog_id: req.body.blog_id },
    data,
    (err, updatedBlog) => {
      if (err) {
        return res.send({ response: err });
      }
      res.send({
        response: updatedBlog,
      });
    }
  );
});

router.get("/find-blog/:id", (req, res) => {
  blogController.find({ blog_id: req.params.id }, (err, blogDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: blogDetails,
    });
  });
});

router.post("/delete-blog", (req, res) => {
  blogController.findOneAndRemove(
    { blog_id: req.body.blog_id },
    (err, deletedBlog) => {
      if (err) {
        return res.send({ response: err });
      }

      res.send({
        response: deletedBlog,
      });
    }
  );
});

router.get("/find-all-blogs", (req, res) => {
  blogController.find({}, (err, allBlogDetails) => {
    if (err) {
      return res.send({ response: err });
    }
    res.json({
      response: allBlogDetails,
    });
  });
});

module.exports = router;
