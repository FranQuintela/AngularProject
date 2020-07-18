const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Post = require('../models/post');

class PostsRepository {

    // get all the posts
    getPosts(callback) {
        console.log('*** PostsRepository.getPosts');
        Post.count((err, posCount) => {
            let count = posCount;
            console.log(`Posts count: ${count}`);

            Post.find({}, (err, posts) => {
                if (err) {
                    console.log(`*** PostsRepository.getPosts error: ${err}`);
                    return callback(err);
                }
                callback(null, {
                    count: count,
                    posts: posts
                });
            });

        });
    }

    getPagedPosts(skip, top, callback) {
        console.log('*** PostsRepository.getPagedPosts');
        Post.count((err, posCount) => {
            let count = posCount;
            console.log(`Skip: ${skip} Top: ${top}`);
            console.log(`Posts count: ${count}`);

            Post.find({})
                    .sort({lastName: 1})
                    .skip(skip)
                    .limit(top)
                    .exec((err, posts) => {
                        if (err) {
                            console.log(`*** PostsRepository.getPagedPosts error: ${err}`);
                            return callback(err);
                        }
                        callback(null, {
                            count: count,
                            posts: posts
                        });
                    });

        });
    }

    // get the post summary
    getPostsSummary(skip, top, callback) {
        console.log('*** PostsRepository.getPostsSummary');
        Post.count((err, posCount) => {
            let count = posCount;
            console.log(`Posts count: ${count}`);

            Post.find({}, { '_id': 0, 'image': 1, 'description': 1, 'date': 1,})
                    .skip(skip)
                    .limit(top)
                    .exec((err, postsSummary) => {
                        callback(null, {
                            count: count,
                            postsSummary: postsSummary
                        });
                    });

        });
    }

    // get a  post
    getPost(id, callback) {
        console.log('*** PostsRepository.getPost');
        Post.findById(id, (err, post) => {
            if (err) {
                console.log(`*** PostsRepository.getPost error: ${err}`);
                return callback(err);
            }
            callback(null, post);
        });
    }

    // insert a  post
    insertPost(body, callback) {
        console.log('*** PostsRepository.insertPost');
        let post = new Post();
        console.log(body);

        post.image = body.image;
        post.description = body.description;
        post.date = body.date;

        post.save((err, post) => {
            if (err) {
                console.log(`*** PostsRepository insertPost error: ${err}`);
                return callback(err, null);
            }

            callback(null, post);
        });
    }

    updatePost(id, body, callback) {
        console.log('*** PostsRepository.editPost');

        Post.findById(id, (err, post)  => {
            if (err) {
                console.log(`*** PostsRepository.editPost error: ${err}`);
                return callback(err);
            }

            post.image = body.image || post.image;
            post.description = body.description || post.description;
            post.date = body.date || post.date;

            post.save((err, post) => {
                if (err) {
                    console.log(`*** PostsRepository.updatePost error: ${err}`);
                    return callback(err, null);
                }

                callback(null, post);
            });

        });
    }

    // delete a post
    deletePost(id, callback) {
        console.log('*** PostsRepository.deletePost');
        Post.remove({ '_id': id }, (err, post) => {
            if (err) {
                console.log(`*** PostsRepository.deletePost error: ${err}`);
                return callback(err, null);
            }
            callback(null, posts);
        });
    }

}

module.exports = new PostsRepository();
