const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    category: String,
    content: String,
    createdby: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    datecreated: {type: Date, default: Date.now},
    likedBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;
