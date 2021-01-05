
const mongoose = require('mongoose');


var Schema = mongoose.Schema;


var PlayerMatchSchema = new Schema({
    Player_match_SK: Number,
    PlayerMatch_key: Number,
    Match_Id: Number,
    Player_Id: Number,
    Player_Name: String,
    DOB: Date,
    Batting_hand: String,
    Bowling_skill: String,
    Country_Name: String,
    Role_Desc: String,
    Player_team: String,
    Opposit_Team: String,
    Season_year: Number,
    is_manofThematch: Boolean,
    Age_As_on_match: Number,
    IsPlayers_Team_won: Boolean,
    Batting_Status: String,
    Bowling_Status: String,
    Player_Captain: String,
    Opposit_captain: String,
    Player_keeper: String,
    Opposit_keeper: String

})
const PlayerMatchModel= mongoose.model('PlayerMatchModel', PlayerMatchSchema);

module.exports = {PlayerMatchModel}
