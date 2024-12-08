import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  id: Number,
  name: String,
  country: String,
  role: String,
  runs: Number,
  wicketsTaken: Number,
  overs: Number,
  fours: Number,
  sixes: Number,
  ballsPlayed: Number,
  ballsBowled: Number,
});

const teamSchema = new mongoose.Schema({
  id: Number,
  score: Number,
  wickets: Number,
  balls: Number,
  members: [memberSchema],
});

const ballSchema = new mongoose.Schema({
  runs: Number,
  extras: Number,
  striker: Number,
  nonStriker: Number,
  bowler: Number,
  status: String,
  commentary: String,
});

const matchSchema = new mongoose.Schema({
  matchid: Number,
  striker: Number,
  nonStriker: Number,
  bowler: Number,
  battingTeam: Number,
  bowlingTeam: Number,
  teams: [teamSchema],
  balls: [ballSchema],
});

export const matchs = mongoose.model("matchs", matchSchema);
