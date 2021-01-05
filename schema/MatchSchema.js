
const mongoose = require('mongoose');


var Schema = mongoose.Schema;



var MatchSchema = new Schema({
    Match_SK: Number,
    match_id: Number,
    Team1: String,
    Team2: String,
    match_date: Date,
    Season_Year: Number,
    Venue_Name: String,
    City_Name: String,
    Country_Name: String,
    Toss_Winner: String,
    match_winner: String,
    Toss_Name: String,
    Win_Type: String,
    Outcome_Type: String,
    ManOfMach: String,
    Win_Margin: String,
    Country_id: Number

})
const MatchModel= mongoose.model('MatchModel', MatchSchema);

module.exports ={MatchModel}

