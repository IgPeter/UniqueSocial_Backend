const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    content: String,
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    dateCreated: {type: Date, default: Date.now},
    likedBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    Post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
    parentComment: {type: mongoose.Schema.Types.ObjectId, ref: 'Comment'},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});


const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;