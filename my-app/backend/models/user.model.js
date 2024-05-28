const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        user_id: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            // required: true
        },
        verified_email: {
            type: Boolean,
            // required: true
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;