import React from "react";
import { useSelector } from "react-redux";

export const Brackets = () => {
  let matchFase0Left = [];
  let matchFase0Right = [];
  let matchFase1Left = [];
  let matchFase1Right = [];
  let matchFase2Left = [];
  let matchFase2Right = [];
  let matchFase3Left = [];
  let matchFase3Right = [];
  let bracketFinalForm = [];

  let f0 = 0;
  let f1 = 0;
  let f2 = 0;
  let f3 = 0;
  let winLoose0 = "";
  let winLoose1 = "";
  let matchup = "";
  let matchup1 = "";
  let teamName0 = "";
  let teamName1 = "";

  const tournament = useSelector(state => state.tournament);
  console.log(tournament);
  let matcheh = (
    matchup,
    matchup1,
    winLoose0,
    winLoose1,
    teamName0,
    teamName1
  ) => {
    return (
      <>
        <div className="marginbottom">
          <ul className={matchup}>
            <li>
              <span className="seed">{winLoose0}</span> {teamName0}
              <span className="score"></span>
            </li>
          </ul>
          <ul className={matchup1}>
            <li>
              <span className="seed">{winLoose1}</span> {teamName1}
              <span className="score"></span>
            </li>
          </ul>
        </div>
      </>
    );
  };
  if (tournament.numberOfTeams > 0) {
    let nbMatchs = tournament.matchs.length;
    tournament.matchs.map((element, i) => {
      if (element.TeamWining === element.teams[0]._id) {
        winLoose0 = "🔥W";
        matchup = "matchup";
        matchup1 = "matchup1";
        winLoose1 = "L";
      } else {
        winLoose0 = "L";
        winLoose1 = "🔥W";
        matchup = "matchup1";
        matchup1 = "matchup";
      }
      if (element.TypeOfMath === 0) {
        if (f0 < nbMatchs / 4) {
          f0++;

          teamName0 = element.teams[0].teamName;
          teamName1 = element.teams[1].teamName;
          matchFase0Left.push(
            matcheh(
              matchup,
              matchup1,
              winLoose0,
              winLoose1,
              teamName0,
              teamName1
            )
          );
        } else {
          matchFase0Right.push(
            matcheh(
              matchup,
              matchup1,
              winLoose0,
              winLoose1,
              teamName0,
              teamName1
            )
          );
        }
      } else if (element.TypeOfMath === 1) {
        if (f1 < nbMatchs / 4 / 2) {
          f1++;
          matchFase1Left.push(
            matcheh(
              matchup,
              matchup1,
              winLoose0,
              winLoose1,
              teamName0,
              teamName1
            )
          );
        } else {
          matchFase1Right.push(
            matcheh(
              matchup,
              matchup1,
              winLoose0,
              winLoose1,
              teamName0,
              teamName1
            )
          );
        }
      } else if (element.TypeOfMath === 2) {
        if (f2 < nbMatchs / 4 / 2 / 2) {
          f2++;
          matchFase2Left.push(
            matcheh(
              matchup,
              matchup1,
              winLoose0,
              winLoose1,
              teamName0,
              teamName1
            )
          );
        } else {
          matchFase2Right.push(
            matcheh(
              matchup,
              matchup1,
              winLoose0,
              winLoose1,
              teamName0,
              teamName1
            )
          );
        }
      } else if (element.TypeOfMath === 3) {
        if (f3 < nbMatchs / 4 / 2 / 2 / 2) {
          f3++;
          matchFase3Left.push(
            matcheh(
              matchup,
              matchup1,
              winLoose0,
              winLoose1,
              teamName0,
              teamName1
            )
          );
        } else {
          matchFase3Right.push(
            matcheh(
              matchup,
              matchup1,
              winLoose0,
              winLoose1,
              teamName0,
              teamName1
            )
          );
        }
      }
      return null;
    });
  }
  if (tournament.numberOfTeams === 4) {
    bracketFinalForm.push(
      <div>
        <div className="col-1-8">{matchFase0Left}</div>
        <div className="col-1-8">{matchFase1Left}</div>
        <div className="col-1-8">{matchFase0Right}</div>
      </div>
    );
  } else if (tournament.numberOfTeams === 8) {
    bracketFinalForm.push(
      <div>
        <div className="col-1-8">{matchFase0Left}</div>
        <div className="col-1-8">
          <div className="round-three">{matchFase1Left}</div>
        </div>
        <div className="col-1-8">
          <div className="round-three"> {matchFase2Left}</div>
        </div>
        <div className="col-1-8">
          <div className="round-three">{matchFase1Right}</div>
        </div>
        <div className="col-1-8">{matchFase0Right}</div>
      </div>
    );
  } else if (tournament.numberOfTeams === 16) {
    bracketFinalForm.push(
      <div>
        <div className="col-1-8">{matchFase0Left}</div>
        <div className="col-1-8">
          <div className="round-three">{matchFase1Left}</div>
        </div>
        <div className="col-1-8">
          <div className="round-three"> {matchFase2Left}</div>
        </div>
        <div className="col-1-8">
          <div className="round-three"> {matchFase3Left}</div>
        </div>
        <div className="col-1-8">
          <div className="round-three"> {matchFase2Right}</div>
        </div>
        <div className="col-1-8">
          <div className="round-three">{matchFase1Right}</div>
        </div>
        <div className="col-1-8">{matchFase0Right}</div>
      </div>
    );
  }

  return <>{bracketFinalForm}</>;
};

export default Brackets;
