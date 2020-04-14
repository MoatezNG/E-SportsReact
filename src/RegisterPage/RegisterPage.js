// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../_actions";
import React, { useState } from "react";

export const RegisterPage = () => {
  const loggingIn = useSelector(state => state.authentication);
  const dispatch = useDispatch();

  const [submitted, setSubmitted] = useState();
  const [name, setName] = useState("");
  const [sumonnerName, setSumonnerName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      name,
      sumonnerName,
      email,
      password,
      userImage,
    }

    setSubmitted(true);
    if (name && email && sumonnerName && password && userImage) {
      dispatch(userActions.register(payload));
    }
  };

  return (
    <div className="col-md-6 col-md-offset-3">
      <h2>Register</h2>
      <form name="form" onSubmit={handleSubmit}>
        {/* 
                Profile picture
                 */}
        <div
          className={"form-group" + (submitted && !name ? " has-error" : "")}
        >
          <label htmlFor="username">Name</label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={e => setUserImage(e.target.files[0])}
          />
          {submitted && !name && (
            <div className="help-block">name is required</div>
          )}
        </div>

        {/* 
                Name
                 */}
        <div
          className={"form-group" + (submitted && !name ? " has-error" : "")}
        >
          <label htmlFor="username">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {submitted && !name && (
            <div className="help-block">name is required</div>
          )}
        </div>
        {/* 
                Password
                 */}
        <div
          className={
            "form-group" + (submitted && !password ? " has-error" : "")
          }
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {submitted && !password && (
            <div className="help-block">Password is required</div>
          )}
        </div>
        {/* 
                Email
                 */}
        <div
          className={"form-group" + (submitted && !email ? " has-error" : "")}
        >
          <label htmlFor="password">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {submitted && !email && (
            <div className="help-block">Email is required</div>
          )}
        </div>
        {/* 
                Summoner name
                 */}
        <div
          className={
            "form-group" + (submitted && !sumonnerName ? " has-error" : "")
          }
        >
          <label htmlFor="password">Summoner name</label>
          <input
            type="text"
            className="form-control"
            name="sumonnerName"
            value={sumonnerName}
            onChange={e => setSumonnerName(e.target.value)}
          />
          {submitted && !sumonnerName && (
            <div className="help-block">Summoner name is required</div>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Login</button>
          {loggingIn && (
            <img
              alt=""
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
            />
          )}
        </div>
      </form>
    </div>
  );
};
