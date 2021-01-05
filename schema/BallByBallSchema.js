
const mongoose = require('mongoose');


var Schema = mongoose.Schema;





var BBBSchema = new Schema({
    MatcH_id: String,
    Over_id: String,
    Ball_id: String,
    Innings_No: String,
    Team_Batting: String,
    Team_Bowling: String,
    Striker_Batting_Position: String,
    Extra_Type: String,
    Runs_Scored: String,
    Extra_runs: String,
    Wides: String,
    Legbyes: String,
    Byes: String, Noballs: String,
    Penalty: String,
    Bowler_Extras: String,
    Out_type: String,
    Caught: Boolean,
    Bowled: Boolean,
    Run_out: Boolean,
    LBW: Boolean,
    Retired_hurt: Boolean,
    Stumped: Boolean,
    caught_and_bowled: Boolean,
    hit_wicket: Boolean,
    ObstructingFeild: Boolean,
    Bowler_Wicket: Boolean,
    Match_Date: Date,
    Season: String,
    Striker: String,
    Non_Striker: String,
    Bowler: String,
    Player_Out: String,
    Fielders: String,
    Striker_match_SK: String,
    StrikerSK: String,
    NonStriker_match_SK: String,
    NONStriker_SK: String,
    Fielder_match_SK: String,
    Fielder_SK: String,
    Bowler_match_SK: String,
    BOWLER_SK: String,
    PlayerOut_match_SK: String,
    BattingTeam_SK: String,
    BowlingTeam_SK: String,
    Keeper_Catch: Boolean,
    Player_out_sk: String,
    MatchDateSK: String

})


const BBBModel= mongoose.model('BBBModel', BBBSchema);

module.exports  ={BBBModel} 
