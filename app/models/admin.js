const mongoose = require(global.__base + '/app/config/database/mongoose')
const { Schema } = mongoose;

const AdminSchema = Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});
module.exports = mongoose.model('Admin', AdminSchema);