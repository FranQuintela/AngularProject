const postsRepo = require("../../../lib/postsRepository"),
  statesRepo = require("../../../lib/statesRepository"),
  util = require("util");

class PostsController {
  constructor(router) {
    router.get("/", this.getPosts.bind(this));
    router.get("/page/:skip/:top", this.getPostsPage.bind(this));
    router.get("/:id", this.getPost.bind(this));
    router.post("/", this.insertPost.bind(this));
    router.put("/:id", this.updatePost.bind(this));
    router.delete("/:id", this.deletePost.bind(this));
  }

  getPosts(req, res) {
    console.log("*** getPosts");
    postsRepo.getPosts((err, data) => {
      if (err) {
        console.log("*** getPosts error: " + util.inspect(err));
        res.json(null);
      } else {
        console.log("*** getPosts ok");
        res.json(data.posts);
      }
    });
  }

  getPostsPage(req, res) {
    console.log("*** getPostsPage");
    const topVal = req.params.top,
      skipVal = req.params.skip,
      top = isNaN(topVal) ? 10 : +topVal,
      skip = isNaN(skipVal) ? 0 : +skipVal;

    postsRepo.getPagedPosts(skip, top, (err, data) => {
      res.setHeader("X-InlineCount", data.count);
      if (err) {
        console.log("*** getPostsPage error: " + util.inspect(err));
        res.json(null);
      } else {
        console.log("*** getPostsPage ok");
        res.json(data.posts);
      }
    });
  }

  getPost(req, res) {
    console.log("*** getPost");
    const id = req.params.id;
    console.log(id);

    postsRepo.getPost(id, (err, post) => {
      if (err) {
        console.log("*** getPost error: " + util.inspect(err));
        res.json(null);
      } else {
        console.log("*** getPost ok");
        res.json(post);
      }
    });
  }

  insertPost(req, res) {
    console.log("*** insertPost");
    postsRepo.insertPost(req.body, (err, post) => {
      if (err) {
        console.log("*** postsRepo.insertPost error: " + util.inspect(err));
        res.json({ status: false, error: "Insert failed", post: null });
      } else {
        console.log("*** insertPost ok");
        res.json({ status: true, error: null, post: post });
      }
    });
  }

  updatePost(req, res) {
    console.log("*** updatePost");
    console.log("*** req.body");
    console.log(req.body);

    if (!req.body) {
      throw new Error("Post required");
    }
    postsRepo.updatePost(req.params.id, req.body, (err, post) => {
      if (err) {
        console.log("*** updatePost error: " + util.inspect(err));
        res.json({ status: false, error: "Update failed", post: null });
      } else {
        console.log("*** updatePost ok");
        res.json({ status: true, error: null, post: post });
      }
    });
  }

  deletePost(req, res) {
    console.log("*** deletePost");

    postsRepo.deletePost(req.params.id, (err) => {
      if (err) {
        console.log("*** deletePost error: " + util.inspect(err));
        res.json({ status: false });
      } else {
        console.log("*** deletePost ok");
        res.json({ status: true });
      }
    });
  }
}

module.exports = PostsController;
