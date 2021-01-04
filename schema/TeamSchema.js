const mongoose = require('mongoose');



var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    Team_SK: {
        type: Number,
        required: true
    },
    Team_Id: {
        type: Number,
        required: true
    },
    Team_Name: {
        type: String,
        required: true
    }
});

const TeamModel  = mongoose.model('TeamModel', TeamSchema);

module.exports ={TeamModel}
