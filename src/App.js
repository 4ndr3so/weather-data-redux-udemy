/* eslint-disable no-console */
import React, { Component } from 'react';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';
import { AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { setCity } from './actions';
import { connect } from 'react-redux';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';


const cities = [
  'Buenos Aires,ar',
  'Washington,us',
  'Bogota,co',
  'Mexico,mx',
  'Madrid,es'
];


class App extends Component {

  constructor() {
    super();
    this.state = { city: null };
  }


  
  render() {
    const { city } = this.state;
    return (

    
        <Container>
          <Grid container>
            <Grid item xs={12}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
   
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  News
                </Typography>
              </Toolbar>
            </AppBar>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} md={6}>
              <LocationListContainer cities={cities} ></LocationListContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={4}>
                <div className='detail'>
                  {
                  
                    <ForecastExtendedContainer></ForecastExtendedContainer>
                  }

                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container >

    );
  }
}

//export default App;



export default App;