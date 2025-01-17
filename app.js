import "dotenv/config";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { getCommentary, UpdateMatch } from "./components/updatematch.js";
import { matchs } from "./models/match.js";

const app = express();
const port = 8000;
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI, {});
const server = createServer(app);

const io = new Server(server, {
  connectionStateRecoveryOptions: {},
  cors: {
    origin: "http://localhost:3000",
  },
});
var match = {
  matchid: 1,
  striker: 1,
  nonStriker: 2,
  bowler: 3,
  battingTeam: 1,
  bowlingTeam: 2,
  teams: [
    {
      id: 1,
      score: 0,
      wickets: 0,
      balls: 1,
      members: [
        {
          id: 1,
          name: "Sachin Tendulkar",
          country: "India",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 2,
          name: "M.S.Dhoni",
          country: "India",
          role: "Wicket Keeper",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 3,
          name: "Virat Kohli",
          country: "India",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 4,
          name: "Rohit Sharma",
          country: "India",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 5,
          name: "Jasprit Bumrah",
          country: "India",
          role: "Bowler",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 6,
          name: "Kapil Dev",
          country: "India",
          role: "All Rounder",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 7,
          name: "Sunil Gavaskar",
          country: "India",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 8,
          name: "Ravindra Jadeja",
          country: "India",
          role: "All Rounder",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 9,
          name: "Anil Kumble",
          country: "India",
          role: "Bowler",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 10,
          name: "Rahul Dravid",
          country: "India",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
      ],
    },
    {
      id: 2,
      score: 0,
      wickets: 0,
      balls: 0,
      members: [
        {
          id: 1,
          name: "Brian Lara",
          country: "West Indies",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 2,
          name: "Chris Gayle",
          country: "West Indies",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 3,
          name: "Shivnarine Chanderpaul",
          country: "West Indies",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 4,
          name: "Curtly Ambrose",
          country: "West Indies",
          role: "Bowler",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 5,
          name: "Courtney Walsh",
          country: "West Indies",
          role: "Bowler",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 6,
          name: "Vivian Richards",
          country: "West Indies",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 7,
          name: "Clive Lloyd",
          country: "West Indies",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 8,
          name: "Malcolm Marshall",
          country: "West Indies",
          role: "Bowler",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 9,
          name: "Michael Holding",
          country: "West Indies",
          role: "Bowler",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
        {
          id: 10,
          name: "Gordon Greenidge",
          country: "West Indies",
          role: "Batsman",
          runs: 0,
          wicketsTaken: 0,
          overs: 0,
          fours: 0,
          sixes: 0,
          ballsPlayed: 0,
          ballsBowled: 0,
        },
      ],
    },
  ],
  balls: [
    {
      runs: 0,
      extras: 0,
      striker: 1,
      nonStriker: 2,
      bowler: 1,
      status: "none",
      commentary: "Sachin Tendulkar to bat",
    },
  ],
};
await matchs
  .findOne({ matchid: 1 })
  .then((res) => {
    match = res;
  })
  .catch((err) => {
    console.log(err);
  });


io.on("connection", (socket) => {
  socket.on("UpdateMatch", async (newMatch) => {
    const ball = newMatch.ball;
    if (ball.status != "none") {
      const commentary = getCommentary(newMatch.ball, match);
      match = UpdateMatch(newMatch.matchDetails, ball);
      match.balls.push({ ...newMatch.ball, commentary: commentary });

      io.emit("match", match);
    }
    match = newMatch.matchDetails;
    io.emit("match", match);
    await matchs
      .findOneAndUpdate({ matchid: 1 }, match, {
        upsert: true,
      })
      .catch((err) => {
        console.log(err);
      });
  });
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
});
app.get("/match/all", (req, res) => {
  return matchs
    .find({})
    .then((match) => {
      return res.json(match);
    })
    .catch((err) => {
      console.log(err);
      return res.json({ message: "error" });
    });
});
app.get("/match/:matchId", (req, res) => {
  // matchs
  //   .findOne({ _id: req.params.matchId })
  //   .then((match) => {
  //     return res.json(match);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return res.json({ message: "error" });
  //   });
  return res.json(match);
});
server.listen(port, () => {
  console.log(`server running at ${port}`);
});
