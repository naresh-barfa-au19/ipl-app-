const mongoose = require('mongoose');

// all model are required here 
const {TeamModel} = require("./schema/TeamSchema")
const {PlayerMatchModel} = require("./schema/PlayerMatchSchema")
const {PlayerModel} = require("./schema/PlayerSchema")
const {MatchModel} = require("./schema/MatchSchema")
const {BBBModel} = require("./schema/BallByBallSchema")

const fs = require('fs');
const BBBfile = "./csv file/Ball_By_Ball.csv"

const csvFile=require('csvtojson')
const csv = require('csv-parser');



mongoose.connect('mongodb://localhost/csv_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));


db.on('connected', async () => {
    const teamData = await TeamModel.countDocuments()
    if (!teamData) {
        fs.createReadStream('./csv file/Team.csv')
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
        fs.createReadStream('./csv file/Player.csv')
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



db.on('connected', async () => {
    const PlayerMatchModelData = await PlayerMatchModel.countDocuments()
    if (!PlayerMatchModelData) {
        fs.createReadStream('./csv file/Player_match.csv')
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



db.on('connected', async () => {
    const MatchModelData = await MatchModel.countDocuments()
    if (!MatchModelData) {
        fs.createReadStream("./csv file/Match.csv")
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


