fs.createReadStream('Team.csv')
    .pipe(csv())
    .on('data', (csvTeamData) => {
        myDB.collection("team2").insertMany([csvTeamData], (err, res) => {
            if (err) throw err;
            if (res) {
                console.log(`Inserted: ${res.insertedCount}  ${csvTeamData.Team_Id} rows`);
            }
        });
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });