import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";

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
  statsBlue: {
    marginLeft: 200,
    marginTop: -355,
  },
  itemsBlue: {
    marginLeft: 270,
    marginTop: -355,
    width: 200,
  },
  itemsRed: {
    marginLeft: -365,
    marginTop: -355,
    width: 200,
  },
  champsred: {
    marginLeft: -100,
    marginTop: 11,
  },
  statsRed: {
    marginLeft: -100,
    marginTop: -355,
  },
  eachStatsBlue: {
    marginTop: 38,
  },
  eachStatsBlue: {
    marginTop: 38,
  },
  membersred: {
    marginLeft: -270,
    marginTop: -370,
  },
  m: {
    marginTop: 55,
  },
  eachspell: {
    marginTop: 40,
  },
  eachitems: {
    marginTop: 30,
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
    marginLeft: -10,
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
  const ddragonItemurl =
    "http://ddragon.leagueoflegends.com/cdn/10.7.1/img/item/";

  const [champions, setChampions] = useState([]);
  const [spells, setSpells] = useState([]);
  const [items, setItems] = useState([]);
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

  async function getItems() {
    try {
      let response = await fetch(
        "http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/item.json"
      );
      let responseJson = await response.json();
      setItems(Object.values(responseJson.data));
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
  function getItemImage(itemid) {
    return items.map((key, i) => {
      if (itemid === i) {
        return (
          <div key={key.key}>
            <Avatar
              variant="square"
              alt="Remy Sharp"
              src={ddragonItemurl + key.image.full}
            />
          </div>
        );
      } else {
        return null;
      }
    });
  }

  useEffect(() => {
    getChampions();
    getSpells();
    getItems();
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
                <h3>{_.round(key.gameDuration / 1000, 0)} seconds</h3>
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
                      <div className={classesList.statsBlue}>
                        {partblue.part.map((element) => {
                          return (
                            <>
                              <div className={classesList.eachStatsBlue}>
                                {element.stats.kills}/{element.stats.deaths}/
                                {element.stats.assists}
                              </div>
                              <div>Level :{element.stats.champLevel}</div>
                            </>
                          );
                        })}
                      </div>
                      <div className={classesList.itemsBlue}>
                        {partblue.part.map((element) => {
                          return (
                            <div className={classesList.eachitems}>
                              <div className="row">
                                <div className="col col-lg-2">
                                  {getItemImage(element.stats.item1)}
                                </div>
                                <div className="col col-lg-2">
                                  {getItemImage(element.stats.item2)}
                                </div>
                                <div className="col col-lg-2">
                                  {getItemImage(element.stats.item3)}
                                </div>
                                <div className="col col-lg-2">
                                  {getItemImage(element.stats.item4)}
                                </div>
                                <div className="col col-lg-2">
                                  {getItemImage(element.stats.item5)}
                                </div>
                                <div className="col col-lg-2">
                                  {getItemImage(element.stats.item6)}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div key={key.gameDuration} className={classesList.teaml}>
                {key.participentsRed.map((partRed) => {
                  return (
                    <div key={partRed._id}>
                      <div
                        key={partRed.team.name}
                        className={classesList.champsred}
                      >
                        <div className={classesList.redteamname}>
                          <h3>{partRed.team.teamName}</h3>
                        </div>

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
                        <div className={classesList.statsRed}>
                          {partRed.part.map((element) => {
                            return (
                              <>
                                <div className={classesList.eachStatsBlue}>
                                  {element.stats.kills}/{element.stats.deaths}/
                                  {element.stats.assists}
                                  <div>Level :{element.stats.champLevel}</div>
                                </div>
                              </>
                            );
                          })}
                        </div>
                        <div className={classesList.itemsRed}>
                          {partRed.part.map((element) => {
                            return (
                              <div className={classesList.eachitems}>
                                <div className="row">
                                  <div className="col col-lg-2">
                                    {getItemImage(element.stats.item1)}
                                  </div>
                                  <div className="col col-lg-2">
                                    {getItemImage(element.stats.item2)}
                                  </div>
                                  <div className="col col-lg-2">
                                    {getItemImage(element.stats.item3)}
                                  </div>
                                  <div className="col col-lg-2">
                                    {getItemImage(element.stats.item4)}
                                  </div>
                                  <div className="col col-lg-2">
                                    {getItemImage(element.stats.item5)}
                                  </div>
                                  <div className="col col-lg-2">
                                    {getItemImage(element.stats.item6)}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
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

            <ExpansionPanelActions></ExpansionPanelActions>
          </ExpansionPanel>
        </div>
      </div>
    );
  });
};

export default MatchList;
