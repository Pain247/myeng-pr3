const User = require(global.__base + '/app/models/user.js');
const Feedback = require(global.__base + '/app/models/feedback.js');
const mongoose = require('mongoose');
let getFeedback = (req, res) => {
    let id = new mongoose.Types.ObjectId(req.params.id);
    Feedback.findOne({ _id: id }).exec((err, feedback) => {
        if (err) return res.json({ errCode: 500, msg: "Internal error" });
        if (!feedback) return res.status(404).json({ errCode: 404, msg: "Not found" });
        else {
            return res.json({ errCode: 200, msg: "Success", data: feedback });
        }
    });
}
module.exports = getFeedback;