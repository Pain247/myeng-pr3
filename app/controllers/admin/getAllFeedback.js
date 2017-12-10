const Admin = require(global.__base + '/app/models/admin.js');
const Feedback = require(global.__base + '/app/models/feedback.js');
const mongoose = require('mongoose');
let getAllFeedback = (req, res) => {
    Feedback.find({ isRep: 0 }).exec((err, feedback) => {
        if (err) return res.json({ errCode: 500, msg: "Internal error" });
        else {
            return res.json({ errCode: 200, msg: "Success", data: feedback });

        }
    });
}
module.exports = getAllFeedback;