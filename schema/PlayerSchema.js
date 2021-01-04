
const mongoose = require('mongoose');


var Schema = mongoose.Schema;


var PlayerSchema = new Schema({
    PLAYER_SK: {
        type: Number,
        required: true
    },
    Player_Id: {
        type: Number,
        required: true
    },
    Player_Name: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    Batting_hand: {
        type: String,
        required: true
    },
    Bowling_skill: {
        type: String,
        required: true
    },
    Country_Name: {
        type: String,
        required: true
    }
})

const PlayerModel=mongoose.model('PlayerModel', PlayerSchema);
module.exports= {PlayerModel}
