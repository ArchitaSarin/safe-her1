const express = require('express');
const router = express.Router();
const Post = require('./post.model');
const User = require('../models/user.model');
const moment = require('moment');

async function fetchUserByEmail(req, res, next) {
    const email = req.params.email;
    try {
        const user = await User.findOne({ email });
        if (user) {
            req.user = user;
            next();
        } else {
            res.status(404).json({ status: 'error', message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
}

router.post('/:email', fetchUserByEmail, async (req, res) => {
    try {
        const { title, content } = req.body;
        const user = req.user;

        const formattedDate = moment().format('MM/DD/YYYY');

        const newPost = new Post({
            title,
            content,
            email: user.email,
            name: user.name,
            timestamp: formattedDate
        });

        await newPost.save();
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});

router.post('/delete/:id/:email', fetchUserByEmail, async (req, res) => {
    try {
        const deleteID = req.params.id;
        const user = req.user;

        const post = await Post.findById(deleteID);

        if (post && post.email === user.email) {
            await Post.findByIdAndDelete(deleteID);
            res.json({ status: 'success' });
        } else {
            res.status(404).json({ status: 'error', message: 'Post not found or unauthorized' });
        }
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ timestamp: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});

router.get('/user/:email', fetchUserByEmail, async (req, res) => {
    try {
        const user = req.user;
        const posts = await Post.find({ email: user.email }).sort({ timestamp: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
});

module.exports = router;
