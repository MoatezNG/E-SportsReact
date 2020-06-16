import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { ProfilePage } from "../ProfilePage";
import { Tournament } from "../_components/Tournament";
import { NewTournament } from "../_components/NewTournament";
import { TournaentDetails } from "../_components/TournaentDetails";
import { PrimarySearchAppBar } from "../NavBar/PrimarySearchAppBar";
import MyTournament from "../_components/MyTournament";
import { UpdateTournament } from "../_components/UpdateTournament";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <div>
          <div>
            {alert.message && (
              <div className={`alert ${alert.type}`}>{alert.message}</div>
            )}
            <Router history={history}>
              <PrimarySearchAppBar />

              <div>
                <Route exact path="/" component={HomePage} />
                <PrivateRoute exact path="/profile" component={ProfilePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/tournaments" component={Tournament} />
                <Route path="/MyTournaments" component={MyTournament} />
                <Route
                  path="/tournamentDetails/:id"
                  component={TournaentDetails}
                />
                <Route path="/NewTournament" component={NewTournament} />
                <Route
                  path="/UpdateTournament/:id"
                  component={UpdateTournament}
                />
              </div>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
