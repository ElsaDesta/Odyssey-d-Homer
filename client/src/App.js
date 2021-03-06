import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  
} from "react-router-dom";
//import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from "./components/Profile";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

function App() {
  return (
    <div className="App">
      <MuiThemeProvider  >
    <Grid  container
    alignItems='center'
    style={{ height:  '100%' }}>
            <Grid  item  xs={12}>
                <Paper
                elevation={4}
                style={{ margin:  32 }}
                >
                        <Grid  container
                        alignItems='center'
                        justify='center'>
                            <Grid  item  xs={12} sm={6}
                            alignContent='center'
                            >
                              <BrowserRouter>
                                   <Switch>
                                      <Route path="/signup" >
                                         <SignUp /> 
                                      </Route>                                    
                                      <Route path="/">
                                      <SignIn />     
                                      </Route>  
                                      <Route path="/profile" >
                                        <Profile />
                                      </Route>        
                                 </Switch>
                             </BrowserRouter>
                                   
                                  
                            </Grid>
                            <Grid  item  xs={12}  sm={6}

style={{ 'text-align':  'center' }}>

<img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"  />

</Grid>

                        </Grid>
                </Paper>
            </Grid>
    </Grid>
</MuiThemeProvider>
    </div>
  );
}

export default App;
