import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //make a post handler like coolwall
  handleSubmit = (e) => {
    e.preventDefault();

    const token = this.state.email.token;

    fetch("/auth/login", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
        
      }),

      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => console.log({ data }))
      .catch((err) => console.log(err));

    //.then(res => {
    ///  const persons = res.data;
    //  this.setState({ persons });
  };

  render() {
    //here was this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1></h1>
          <TextField
            id="outlined-basic"
            label="test@test.com"
            variant="outlined"
            value={this.state.email}
            onChange={this.handleInputChange}
            type="email"
            name="email"
          />{" "}
          <br></br>
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            name="password"
          />{" "}
          <br></br>
          
            <Button variant="contained" color="secondary" type="submit">
              SignIn
            </Button>{" "}
         
          <NavLink to="/signup">Sing up</NavLink>
        </form>
      </div>
    );
  }
}

export default SignIn;
