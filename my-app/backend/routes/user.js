const router = require("express").Router();
const { restart } = require("nodemon");
const User = require("../models/user.model.js");

router.route("/").get((req, res) => {
    res.send("hello world :D");
})

router.route("/add").post((req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const user_id = req.body.user_id;
    // const picture = req.picture;
    const verified_email = req.body.verified_email;

    const newItem = new User({
        email: email,
        name: name,
        user_id: user_id,
        // picture: picture,
        verified_email
    });

    newItem
        .save()
        .then(() => res.json(" New Item Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});


router.route("/get/:name").get((req, res) => {
    User.find({ "name": req.params.name })
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/get/:email").get((req, res) => {
    User.find({ "email": req.params.email })
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:name").put((req, res) => {
    User.findOne({ name: req.params.name })
        .then(item => {
            item.name = req.body.name;
            item.save()
                .then(() => res.status(200).json("Item Updated!"))
                .catch(err => res.status(400).json("Error: " + err));
        });
});

router.route("/delete/:name").delete((req, res) => {
    User.findOneAndDelete({ name: req.params.name })
        .then(item => res.json(item))
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;