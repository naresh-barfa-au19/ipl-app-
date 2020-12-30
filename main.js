const express = require('express')
const app = express()
const csv = require('csv-parser');
const csvFile=require('csvtojson')
const BBBfile = "./Ball_By_Ball.csv"

const fs = require('fs');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/csv_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


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

const TeamModel = mongoose.model('TeamModel', TeamSchema);

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

const PlayerModel = mongoose.model('PlayerModel', PlayerSchema);

db.on('connected', async () => {
    const teamModelData = await TeamModel.countDocuments()
    if (!teamModelData) {
        fs.createReadStream('Team.csv')
            .pipe(csv())
            .on('data', async (csvTeamData) => {

                await TeamModel.insertMany([csvTeamData], (err, res) => {
                    if (err) throw err;
                    if (res) {
                        console.log(`Inserted: ${res.insertedCount}  ${csvTeamData.Team_Id} rows`);
                    }
                });
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });
    } else {
        console.log("Data Already Available team :)")
    }
});


db.on('connected', async () => {
    const PlayerModelData = await PlayerModel.countDocuments()
    if (!PlayerModelData) {
        fs.createReadStream('Player.csv')
            .pipe(csv())
            .on('data', async (csvPlayerData) => {

                await PlayerModel.insertMany([csvPlayerData], (err, res) => {
                    if (err) throw err;
                });
                console.log("data sent to csv db player")
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });
    } else {
        console.log("Data Already Available player collection:)")
    }
});


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

const PlayerMatchModel = mongoose.model('PlayerMatchModel', PlayerMatchSchema);


db.on('connected', async () => {
    const PlayerMatchModelData = await PlayerMatchModel.countDocuments()
    if (!PlayerMatchModelData) {
        fs.createReadStream('Player_match.csv')
            .pipe(csv())
            .on('data', async (csvPlayerMatchData) => {

                await PlayerMatchModel.insertMany([csvPlayerMatchData], (err, res) => {
                    if (err) throw err;
                    if (res) {
                        console.log("data inserted in database");
                    }
                });
            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });
    } else {
        console.log("Data Already Available player match collection:)")
    }
});

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

const MatchModel = mongoose.model('MatchModel', MatchSchema);


db.on('connected', async () => {
    const MatchModelData = await MatchModel.countDocuments()
    if (!MatchModelData) {
        fs.createReadStream('Match.csv')
            .pipe(csv())
            .on('data', async (csvMatchData) => {


                await MatchModel.insertMany([csvMatchData], (err, res) => {
                    if (err) throw err;
                    if (res) {
                        console.log("data inserted in database");
                    }
                });


            })
            .on('end', () => {
                console.log('CSV file successfully processed');
            });
    } else {
        console.log("Data Already Available match collection:)")
    }
});

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



const BBBModel = mongoose.model('BBBModel', BBBSchema);


db.once('open', async () => {
    const BBBModelData = await BBBModel.countDocuments({})
    if (!BBBModelData) {
        csvFile()
        .fromFile(BBBfile)
        .then(async jsonObj => {
            
          
            await BBBModel.insertMany(jsonObj)
            console.log("Item  Inserted")
        }).then(res => console.log("Delivries Data Added to Delivries Schema"))
        .catch(err => console.log(err));
    } else {
        console.log("Data Already Available Ball BY Ball collection:)")
    }
});






app.get("/teamId/:teamId", async(req, res) => {
    const teamModelData = await TeamModel.find({Team_Id:req.params.teamId},{Team_SK:0,__v:0}).sort({Team_Id:1})
    console.log("home router",teamModelData)
    res.status(200).send(teamModelData)


})


app.listen(3000, console.log("Server Connected to Port 3000"))



