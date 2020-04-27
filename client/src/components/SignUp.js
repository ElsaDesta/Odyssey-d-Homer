import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
      email: "",
      password: "",
      name: "",
      lastname: "",
     
     
    
  };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


    // const { email, password, name, lastname } = this.state;

    
    //make a post handler like coolwall
  handleSubmit = (e) => {
    e.preventDefault();

    


     fetch("/auth", {
       method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      
     body: JSON.stringify(this.state),
     })
     .then((res) => res.json())
     .then((data) => {console.log('success:', data);
    })
    .catch((err) => this.setState({ flash: err.flash }));


      //.then(res => {
      ///  const persons = res.data;
      //  this.setState({ persons });

        
  };

  render() {
    const List = JSON.stringify(this.state); //here was this.state
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
          <TextField
            id="outlined-basic"
            label="first name"
            variant="outlined"
            value={this.state.name}
            onChange={this.handleInputChange}
            type="text"
            name="name"
          />{" "}
          <br></br>
          <TextField
            id="outlined-basic"
            label="last name"
            variant="outlined"
            value={this.state.lastname}
            onChange={this.handleInputChange}
            type="text"
            name="lastname"
          />{" "}
          <br></br>
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
