import React, { Component } from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from '@material-ui/core/ListItemText';

export default class Profile extends Component {
    constructor(props) {
        super(props)
    this.state= {
        profile: {
            email: "homer.simpson@wildcodeschool.fr",
            name: "Homer",
            lastname: "Simpson"
        }
    }
};




    render() {
        return (
            <div>
                <List>
    <ListItem>
            <ListItemText primary="email" secondary={this.state.profile.email} />
            <ListItemText primary="name" secondary= {this.state.profile.name} />
            <ListItemText primary="lastname" secondary={this.state.profile.lastname} />
    </ListItem>
</List>
                
            </div>
        )
    }
}
