const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type: String, required: true},
    email: String,
    password: String,
    phoneNumber: String,
    dateOfBirth: Date,
    avatar: String,
    postCreated: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    commentCreated: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    commentsLiked: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
    postsLiked: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],
    isAdmin: Boolean,
    country: String,
    city: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;

