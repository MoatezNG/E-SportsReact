import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { useEffect } from "react";
import { tournamentActions } from "../_actions/tournament.actions";
import { useSelector, useDispatch } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../HomePage/HomePage";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { parsing } from "../_helpers/image";
import clsx from "clsx";
const useStyless = makeStyles((theme) => ({
  roote: {
    maxWidth: 250,
  },
  contentCenter: {
    marginLeft: 300,
  },
  media: {
    height: 140,
  },
}));

const MyTournament = () => {
  const classes2 = useStyless();
  const open = useSelector((state) => state.drawer);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tournamentActions.MyTournaments());
  }, [dispatch]);
  const routeTournamentUpdate = (id) => {
    let path = "/UpdateTournament/" + id;
    history.push(path);
  };
  const mytournaments = useSelector((state) => state.mytournaments);
  console.log(mytournaments);
  let NewTournament = () => {
    let path = `/NewTournament`;
    history.push(path);
  };
  return (
    <div>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes2.contentCenter}>
          <Grid container className={classes2.root} spacing={2}>
            <Grid item xs={11}>
              <Grid container justify="center" spacing={2}>
                {mytournaments.map((value) => (
                  <Grid key={value} item>
                    <Card className={classes2.roote}>
                      <CardActionArea>
                        <CardMedia
                          className={classes2.media}
                          image={parsing(value.tournamentPicture)}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {value.tournamentName}{" "}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {value.description}
                            This where the discription is loaded. Nothing to see
                            Right now please come back later
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => routeTournamentUpdate(value._id)}
                        >
                          Update Tournament
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Tooltip title="Add" placement="right-end">
                <Tooltip
                  title="Create Tournament"
                  aria-label="add"
                  onClick={NewTournament}
                >
                  <Fab color="primary">
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Tooltip>
            </Grid>
          </Grid>
        </div>
      </main>
      {/*    <Grid container justify="center">
        <Grid item container xs={12} alignItems="flex-end" direction="column">
          <Grid item className={classes.tooltip}></Grid>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default MyTournament;
