const express = require('express')
const app = express()
const csv = require('csv-parser');
const fs = require('fs');
const mongoose = require('mongoose');
const { strict } = require('assert');


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
    const teamModelData = await TeamModel.find({})
    if (!teamModelData.length) {
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
    const PlayerModelData = await PlayerModel.find({})
    if (!PlayerModelData.length) {
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
    const PlayerMatchModelData = await PlayerMatchModel.find({})
    if (!PlayerMatchModelData.length) {
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
    const MatchModelData = await MatchModel.find({})
    if (!MatchModelData.length) {
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
    MatcH_id: Number,
    Over_id: Number,
    Ball_id: Number,
    Innings_No: Number,
    Team_Batting: String,
    Team_Bowling: String,
    Striker_Batting_Position: Number,
    Extra_Type: String,
    Runs_Scored: Number,
    Extra_runs: Number,
    Wides: Number,
    Legbyes: Number,
    Byes: Number, Noballs: Number,
    Penalty: Number,
    Bowler_Extras: Number,
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
    Season: Number,
    Striker: Number,
    Non_Striker: Number,
    Bowler: Number,
    Player_Out: String,
    Fielders: String,
    Striker_match_SK: Number,
    StrikerSK: Number,
    NonStriker_match_SK: Number,
    NONStriker_SK: Number,
    Fielder_match_SK: Number,
    Fielder_SK: Number,
    Bowler_match_SK: Number,
    BOWLER_SK: Number,
    PlayerOut_match_SK: Number,
    BattingTeam_SK: Number,
    BowlingTeam_SK: Number,
    Keeper_Catch: Boolean,
    Player_out_sk: Number,
    MatchDateSK: Number

})



const BBBModel = mongoose.model('BBBModel', BBBSchema);


db.on('connected', async () => {
    const BBBModelData = await BBBModel.find({})
    if (!BBBModelData.length) {
        const arryData = await fs.readFileSync('Ball_By_Ball.csv')
        let newArr = []
        for (let i = 1; i < arryData.length + 1; i = i + 5000) {
            let k = i - 1
            newArr = arryData.slice(k, k + 5000)
        }
        console.log(newArr.length)
        newArr.forEach(async (item, index) => {
            await BBBModel.insertMany([item], (err, res) => {
                if (err) throw err;
                if (res) {
                    console.log("Batch ", index, " Added to DB");
                }
            });
        })
    } else {
        console.log("Data Already Available Ball BY Ball collection:)")
    }
});






app.get("/", (req, res) => {
    res.status(200).send(`<h1>hello world</h1>`)
})


app.listen(3000, console.log("Server Connected to Port 3000"))



