import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Button from "@material-ui/core/Button";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";
var _ = require("lodash");
const useStylesList = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxHeight: "10000ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  rootEx: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  teaml: {
    marginLeft: 800,
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  margduration: {
    marginLeft: 200,
  },
  parti: {
    marginLeft: 100,
  },
  members: {
    marginLeft: 110,
    marginTop: -370,
  },
  membersred: {
    marginLeft: -60,
    marginTop: -370,
  },
  m: {
    marginTop: 55,
  },
  eachspell: {
    marginTop: 40,
  },
  spells: {
    marginTop: -380,
    marginLeft: -20,
  },
  spellsRed: {
    marginTop: -380,
    marginLeft: -100,
  },
  champ: {
    marginLeft: -70,
    marginTop: -3,
  },
  teamname: {
    marginLeft: -20,
  },
  redteamname: {
    marginLeft: -200,
  },
  flex_container: {
    display: "flex",
    flexWrap: "nowrap",
  },
  small: {
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
}));
const MatchList = () => {
  const ddragonImageUrl =
    "http://ddragon.leagueoflegends.com/cdn/10.7.1/img/champion/";
  const ddragonSpellurl =
    "http://ddragon.leagueoflegends.com/cdn/10.7.1/img/spell/";
  const [champions, setChampions] = useState([]);
  const [spells, setSpells] = useState([]);
  const matchs = useSelector((state) => state.matchs);
  const classesList = useStylesList();

  async function getChampions() {
    try {
      let response = await fetch(
        "http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion.json"
      );
      let responseJson = await response.json();
      setChampions(Object.values(responseJson.data));
      return responseJson.data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getSpells() {
    try {
      let response = await fetch(
        "http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/summoner.json"
      );
      let responseJson = await response.json();
      setSpells(Object.values(responseJson.data));
      return responseJson.data;
    } catch (error) {
      console.error(error);
    }
  }

  function getChampion(champid) {
    return champions.map((key) => {
      if (champid === parseInt(key.key)) {
        return (
          <div key={key.key} className={classesList.champ}>
            <Avatar alt="Remy Sharp" src={ddragonImageUrl + key.image.full} />
            <h6>{key.name}</h6>
          </div>
        );
      } else {
        return null;
      }
    });
  }

  function getSpellsImages(spellid) {
    return spells.map((key) => {
      if (spellid === parseInt(key.key)) {
        return (
          <div key={key.key}>
            <Avatar
              className={classesList.small}
              variant="square"
              alt="Remy Sharp"
              src={ddragonSpellurl + key.image.full}
            />
          </div>
        );
      } else {
        return null;
      }
    });
  }
  console.log(spells);
  useEffect(() => {
    getChampions();
    getSpells();
  }, []);

  return matchs.map((key) => {
    return (
      <div key={key._id} className={classesList.root}>
        <div className={classesList.rootEx}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classesList.column}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
                />
              </div>
              <div className={classesList.column}>
                <div>
                  <h1>vs</h1>
                </div>
              </div>
              <Avatar
                alt="Remy Sharp"
                src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
              />
              <div className={classesList.margduration}>
                <h3>{_.round(key.gameDuration / 60, 0)} mins</h3>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classesList.column}>
              <div key={key._id}>
                {key.participentsBlue.map((partblue) => {
                  return (
                    <div key={partblue._id}>
                      <div key={partblue._id} className={classesList.parti}>
                        <div className={classesList.teamname}>
                          <h3>{partblue.team.teamName}</h3>
                        </div>
                        <p></p>
                        {partblue.part.map((p) => {
                          return <div>{getChampion(p.championId)}</div>;
                        })}
                        <div className={classesList.spells}>
                          {partblue.part.map((p) => {
                            return (
                              <div className={classesList.eachspell}>
                                {getSpellsImages(p.spell1Id)}
                                {getSpellsImages(p.spell2Id)}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className={classesList.members}>
                        {partblue.team.members.map((element) => {
                          return (
                            <div key={element._id} className={classesList.m}>
                              {element.name}
                            </div>
                          );
                        })}
                        <div className={classesList.m}>
                          {partblue.team.teamLeader.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div key={key.gameDuration} className={classesList.teaml}>
                {key.participentsRed.map((partRed) => {
                  return (
                    <div key={partRed._id} className={classesList.column}>
                      <div
                        key={partRed.team.name}
                        className={classesList.parti}
                      >
                        <div className={classesList.redteamname}>
                          <h3>{partRed.team.teamName}</h3>
                        </div>
                        <p></p>
                        {partRed.part.map((p) => {
                          return getChampion(p.championId);
                        })}
                        <div className={classesList.spellsRed}>
                          {partRed.part.map((p) => {
                            return (
                              <div className={classesList.eachspell}>
                                {getSpellsImages(p.spell1Id)}
                                {getSpellsImages(p.spell2Id)}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className={classesList.membersred}>
                        {partRed.team.members.map((element) => {
                          return (
                            <div key={element._id} className={classesList.m}>
                              {element.name}
                            </div>
                          );
                        })}
                        <div className={classesList.m}>
                          {partRed.team.teamLeader.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* {key.teamsIngame.map((element) => {
                  return (
                    <div>
                      <h1>bans</h1>
                      {element.bans.map((ban) => {
                        return <div>{getChampion(ban.championId)}</div>;
                      })}
                    </div>
                  );
                })} */}
              </div>
            </ExpansionPanelDetails>

            <ExpansionPanelActions>
              <p>..</p>
            </ExpansionPanelActions>
          </ExpansionPanel>
        </div>
      </div>
    );
  });
};

export default MatchList;