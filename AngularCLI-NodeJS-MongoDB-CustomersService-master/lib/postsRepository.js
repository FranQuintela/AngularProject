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

            Post.find({}, { '_id': 0, 'image': 1, 'description': 1, 'date': 2 , 'style': 3})
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

}

module.exports = new PostsRepository();
