const express = require ("express");
const { getRecentNBlogs, createBlog, likeBlog, getRecentBlogs } = require("../controllers/blogController");

const router = express.Router();

router.route("/recent").get(getRecentNBlogs);
router.route("/create").post(createBlog)
router.route("/:blogId/like").put(likeBlog)
router.route("/recent/:limit").get(getRecentBlogs)
module.exports = router