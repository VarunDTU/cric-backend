export function UpdateMatch(matchDetails, ball) {
  const striker = ball.striker;
  const nonStriker = ball.nonStriker;
  const bowler = ball.bowler;

  matchDetails.teams[ball.battingTeam - 1].members[striker - 1].runs +=
    ball.runs;
  matchDetails.teams[matchDetails.battingTeam - 1].members[striker - 1].balls +=
    ball.runs;
  matchDetails.teams[matchDetails.battingTeam - 1].members[striker - 1].balls +=
    ball.ballsPlayed++;
  matchDetails.teams[matchDetails.battingTeam - 1].score += ball.runs;
  matchDetails.teams[matchDetails.battingTeam - 1].balls++;
  matchDetails.teams[matchDetails.bowlingTeam - 1].members[bowler - 1]
    .ballsBowled++;

  ball.runs == 4
    ? (matchDetails.teams[matchDetails.battingTeam - 1].members[
        striker - 1
      ].fours += 1)
    : 0;
  ball.runs == 6
    ? (matchDetails.teams[matchDetails.battingTeam - 1].members[
        striker - 1
      ].sixes += 1)
    : 0;

  if (ball.runs % 2 != 0 && ball.runs != 0) {
    let temp = matchDetails.striker;
    matchDetails.striker = matchDetails.nonStriker;
    matchDetails.nonStriker = temp;
  }
  return { ...matchDetails };
}

export function getCommentary(ball, match) {
  const batsman =
    match.teams[match.battingTeam - 1].members[ball.striker - 1].name;
  const bowler =
    match.teams[match.bowlingTeam - 1].members[ball.bowler - 1].name;
  const runs = ball.runs;
  const extras = ball.extras;
  const status = ball.status;
  const commentary = `${batsman} scores ${runs} runs against ${bowler}`;
  console.log(commentary);
  return commentary;
}
