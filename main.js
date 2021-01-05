const express = require('express')
const app = express()

// all model are required here 
const {TeamModel} = require("./schema/TeamSchema")
const {PlayerMatchModel} = require("./schema/PlayerMatchSchema")
const {PlayerModel} = require("./schema/PlayerSchema")
const {MatchModel} = require("./schema/MatchSchema")
const {BBBModel} = require("./schema/BallByBallSchema")
// database required here
require("./database");
 



app.get("/",(req,res)=>{
    res.status(200).send(`<h1>welcome home</h1>`)
})



app.get("/team/teamId/:teamId", async(req, res) => {
    let teamData=[];
    if(req.params.teamId>=1&&req.params.teamId<=12){

         teamData = await TeamModel.find({Team_Id:req.params.teamId},{Team_SK:0,__v:0}).sort({Team_Id:1})
        }else{
            teamData=[{
                message:"there are only 12 IPL teams",
                error:"incorrect teamId ..."
            }]
        }
        res.status(200).send(teamData)
        console.log("home router :):",teamData)


})

app.get("/playerMatch/playerId/:playerId",async (req,res)=>{
    //const playerMatchdata = await PlayerMatchModel.find({Player_Id:req.params.playerId},{Player_Id:1,Player_Name:1,Player_team:1,Season_year:1, _id: 0}).sort({Player_Id:1})
    const playerMatchdataAgg =await PlayerMatchModel.aggregate([
        {$match:{
            Player_Id:parseInt(req.params.playerId)
        }},
        {$group :
            {
                _id:{
    
                    Player_Name:"$Player_Name",
                    Player_team:"$Player_team",
                    Season_year:"$Season_year"
                }
        }},{
            $sort : { Season_year: 1 }
        }
    ])

    const playerData = await PlayerModel.findOne({Player_Id:req.params.playerId})
    // const filtredPlayerMatchData = playerMatchdata.filter(a => {
    //     return !this[a.Season_year] && (this[a.Season_year] = true);
    // }, Object.create(null));
    res.status(200).send({
      // playerMatchdata,
      playerMatchdataAgg,
        playerData,
    })
    console.log("playerMatch API :):",parseInt(req.params.playerId))

})

app.get("/ballbyball/matchId/:matchId/inningId/:inningId",async(req,res)=>{
    const matchId = req.params.matchId.toString()
    // const BallByBallData = await BBBModel.aggregate([
    //     {
    //         $match:{
    //             MatcH_id: matchId,
    //             Innings_No: req.params.inningId.toString()
    //          }
    //         },
    //         {
    //             $group: {
    //                 _id: {
    //                     Over_id: "$Over_id",
    //                     Innings_No: "$Innings_No",
    //                     Runs_Scored: "$Runs_Scored"
    //                 }
    //             }
    //         },
    //         {
    //         $project:{
    //             totalScore: {
    //                 $sum: {
    //                     $toDouble: "$Runs_Scored"
    //                 }
    //             }
    //         }
    //     }
    // ])
    const BBBData = await BBBModel.find(
        {MatcH_id: matchId,
        Innings_No: req.params.inningId.toString()},
        {
            Over_id:1,
            Innings_No:1,
            Runs_Scored:1
        })
       

            const  total_run = BBBData.filter( item =>item.Innings_No === req.params.inningId).map(item=>parseInt(item.Runs_Scored)).reduce((a,b)=>a+b ,0)
           // console.log(total_run)
          // console.log(BBBData)
          let perOverRunArr =[]
        for (let i = 1; i <=20; i++) {
            var perOverRun = BBBData.filter(item =>item.Over_id === i.toString()).map(item => parseInt(item.Runs_Scored)).reduce((a,b) => a + b, 0)
            perOverRunArr.push({
                overId: i,
                runs: perOverRun,
                inningId: req.params.inningId
            })
           // console.log(i, i.toString(),perOverRun)
        }
        console.log(perOverRunArr)



        const MatchDetailData = await MatchModel.find({match_id: parseInt(req.params.matchId) })
    res.status(200).send({
        MatchDetailData,
       // BallByBallData,
       BBBData,
       perOverRunArr,
       Total_Run : total_run,
    })
    console.log("ball by ball API :):",req.params.matchId,typeof(req.params.inningId),req.params.inningId)
})

app.get("/pagination", async (req,res)=>{
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const totalDocs = await MatchModel.find({}).countDocuments()
    const startIndex = (page -1)*limit
    const lastIndex = page*limit
    const result = {}
    const lst =((totalDocs/limit) +1)
    const skip= (page-1)*limit
    //console.log(lst)
    if(page === parseInt(lst)){
        result.lastPage={
            page:page,
            limit:limit
        }
    }else{
        result.nextPage={
            page:page+1,
            limit:limit
        }
    }
    
    if(page === 1){
        result.firstPage={
            page:page
        }
    }else{
        result.previousPage={
            page:page-1,
            limit:limit
        }
    }
    result.currentPage={
        page:page,
        limit:limit
    }
   

     result.matchData = await MatchModel.find({}).limit(limit).skip(skip)

     

    res.status(200).send(result)

})


app.listen(3000, console.log("Server Connected to Port 3000"))



