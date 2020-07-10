import React from 'react';
import { makeStyles, Grid, Box } from '@material-ui/core';
import AppPerformance from '../homepageitems/Cart/AppPerformance';
import CardItem from '../homepageitems/Cart/CartItem'
import ServerOverView from '../homepageitems/Cart/ServerOverView';
import MainChart from '../homepageitems/Chart/MainChart';
import Revenue from '../homepageitems/Cart/Revenue';

const useStyles = makeStyles(theme =>({

  root:{
      flexGrow:1,
      display:'flex',
  }
}));
const Homepage = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.root}>
            <Grid item xs={3}>
            <CardItem/>
            </Grid>
            <Grid item xs={3}>
                <AppPerformance/>
            </Grid>
            <Grid item xs={3}>
                <ServerOverView></ServerOverView>
            </Grid>
            <Grid item xs={3}>
                <Revenue/>
            </Grid>
            
        </div>
        <Box width={1}>
            <MainChart/>
        </Box>
        </>
    );

};

export default Homepage;