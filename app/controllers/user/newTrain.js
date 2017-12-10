const User = require(global.__base + '/app/models/user.js');
const host = process.env.HOST;
const redis = require('redis');
const client = redis.createClient(6379,host);
let newTrain = (req, res) => {
    client.on("error", function(err) {
        console.log("Error " + err);
    });
    let userid = req.session.userId;
    let train = req.body.train;
    client.hmset(userid, "trainExp", train);
    client.hmset(userid, "tempExp", 0);
    client.hmset(userid, "date", 0);
    client.expire(userid, 86400);
    res.redirect("/MyEng/" + userid);
}
module.exports = newTrain;