import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useDispatch } from "react-redux";
import { tournamentActions } from "../_actions/tournament.actions";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      textAlign: "center",
    },
  },
  nbTeam: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    width: 600,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    width: 1000,
    color: theme.palette.text.secondary,
  },
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
    paddingRight: theme.spacing(1),
  },
}));
export const NewTournament = () => {
  const classes = useStyles();

  const nbsTournament = [
    { value: 4, label: "4" },
    { value: 8, label: "8" },
    { value: 16, label: "16" },
    { value: 32, label: "32" },
  ];
  const dispatch = useDispatch();
  const [phase2, setphase2] = useState(true);
  const [phase3, setphase3] = useState(true);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [tournamentName, settournamentName] = useState("");
  const [dateRound0, setDateRound0] = React.useState(new Date());
  const [dateRound1, setDateRound1] = React.useState(new Date());
  const [dateRound2, setDateRound2] = React.useState(new Date());
  const [dateRound3, setDateRound3] = React.useState(new Date());
  const [numberOfTeams, setnbTournament] = useState(4);
  const [submitted, setSubmitted] = useState();
  const [tournamentImage, settournamentImage] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [valid, setValid] = useState();
  const handleChange = (event) => {
    setnbTournament(event.target.value);
    if (event.target.value === 4) {
      console.log(event.target.value);
      setphase2(true);
      setphase3(true);
    } else if (event.target.value === 8) {
      setphase2(false);
      setphase3(true);
    } else if (event.target.value === 16) {
      setphase2(false);
      setphase3(false);
    }
  };
  const handleDateChange0 = (date) => {
    setDateRound0(date.setSeconds(0, 0));
  };
  const handleDateChange1 = (date) => {
    setDateRound1(date.setSeconds(0, 0));
  };
  const handleDateChange2 = (date) => {
    setDateRound2(date.setSeconds(0, 0));
  };
  const handleDateChange3 = (date) => {
    setDateRound3(date.setSeconds(0, 0));
  };
  const user = localStorage.getItem("user");
  const parsedUser = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      (tournamentName, numberOfTeams, tournamentImage) &&
      dateRound0 < dateRound1
    ) {
      console.log(parsedUser.user);
      const formData = new FormData();
      formData.append("tournamentName", tournamentName);
      formData.append("numberOfTeams", numberOfTeams);
      formData.append("description", description);
      formData.append("tournamentImage", file);
      formData.append("dateRound0", dateRound0);
      formData.append("dateRound1", dateRound1);
      formData.append("tournamentAdmin", parsedUser.user._id);
      /*    formData.append("dateRound2",dateRound0);
      formData.append("dateRound3",dateRound0); */
      dispatch(tournamentActions.addTournament(formData));
    } else {
      setValid(false);
    }
  };
  const onChange = (e) => {
    setFile(e.target.files[0]);
    settournamentImage(e.target.files[0].name);
  };

  return (
    <div className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Paper elevation={10} className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container>
              <Grid item md={12} className={classes.center}>
                <TextField
                  id="outlined-basic"
                  label="Tournament Name"
                  value={tournamentName}
                  className={classes.nbTeam}
                  variant="outlined"
                  onChange={(e) => settournamentName(e.target.value)}
                />
              </Grid>
              <Grid item md={12} className={classes.center}>
                <TextField
                  id="standard-select-currency"
                  select
                  label="Number Of Teams"
                  value={numberOfTeams}
                  className={classes.nbTeam}
                  onChange={handleChange}
                  variant="outlined"
                  helperText=""
                >
                  {nbsTournament.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item md={12} className={classes.center}>
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  value={description}
                  className={classes.nbTeam}
                  rows="4"
                  defaultValue="Default Value"
                  variant="outlined"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item md={12} className={classes.center}>
                <TextField
                  id="standard-basic"
                  label="image"
                  value={null}
                  className={classes.nbTeam}
                  type="file"
                  variant="outlined"
                  onChange={onChange}
                />
              </Grid>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item md={6} className={classes.right}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={dateRound0}
                    variant="outlined"
                    onChange={handleDateChange0}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item md={6} className={classes.left}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={dateRound0}
                    variant="outlined"
                    onChange={handleDateChange0}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item md={6} className={classes.right}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={dateRound1}
                    onChange={handleDateChange1}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item md={6} className={classes.left}>
                  <KeyboardTimePicker
                    margin="normal"
                    id="time-picker"
                    label="Time picker"
                    value={dateRound1}
                    onChange={handleDateChange1}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item md={6} className={classes.right}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    disabled={phase2}
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={dateRound2}
                    onChange={handleDateChange2}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item md={6} className={classes.left}>
                  <KeyboardTimePicker
                    margin="normal"
                    disabled={phase2}
                    id="time-picker"
                    label="Time picker"
                    value={dateRound2}
                    onChange={handleDateChange2}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                  {submitted && !valid && (
                    <div className="help-block">Invalid Date</div>
                  )}
                </Grid>
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item md={6} className={classes.right}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    disabled={phase3}
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={dateRound3}
                    onChange={handleDateChange3}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Grid>
                <Grid item md={6} className={classes.left}>
                  <KeyboardTimePicker
                    margin="normal"
                    disabled={phase3}
                    id="time-picker"
                    label="Time picker"
                    value={dateRound3}
                    onChange={handleDateChange3}
                    KeyboardButtonProps={{
                      "aria-label": "change time",
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
          </form>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Create Tournament
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default NewTournament;
