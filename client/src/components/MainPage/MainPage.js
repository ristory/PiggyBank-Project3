import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import BottomNav from '../BottomNav';
import Table from '../Table'
import NavBar from '../Navbar'


const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  demo: {
    height: 200,
  },
  control: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  dense: {
    marginTop: 16,
    padding: theme.spacing.unit * 10
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  margin: {
    marginTop: 100
  }
});


class MainPage extends Component {
  constructor(){
    super();
    this.state = { value: null}
    this.dynamic = this.dynamic.bind(this)
 }
 
 dynamic(value){
    this.setState({value})
 }

  render () {

  const { classes } = this.props;
  return (
    <>
      <NavBar />
      <Grid container justify="center" alignItems="center">      
      </Grid>
      <Grid container justify="center" alignItems="center" > 
        <Table  value={this.state.value}/>
      </Grid>
      <Grid container justify="center" alignItems="center" className={classes.margin}> 
        <BottomNav value={this.state.value} dynamic={this.dynamic}/>
      </Grid>
    </>
  );
}
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
  
