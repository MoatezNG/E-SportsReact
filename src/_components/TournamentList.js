import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { parsing } from "../_helpers/image";
import { useHistory } from "react-router-dom";

export const TournamentList = () => {
  const history = useHistory();
  const tournaments = useSelector(state => state.tournaments);
  const routeTournamentDetails = id => {
    let path = "/tournamentDetails/" + id;
    history.push(path);
  };
  const useStyles2 = makeStyles(theme => ({
    roote: {
      maxWidth: 250
    },
    contentCenter: {
      marginLeft: 300
    },
    media: {
      height: 140
    }
  }));

  const classes2 = useStyles2();
  console.log(tournaments);

  return (
    <div className={classes2.contentCenter}>
      <Grid container className={classes2.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            {tournaments.map(value => (
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
                        {value.tournamentPicture}
                        This where the discription is loaded. Nothing to see
                        Right now please come back later
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Participate
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => routeTournamentDetails(value._id)}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default TournamentList;
