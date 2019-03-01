import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 180,
  },
  control: {
    padding: theme.spacing.unit * 2,
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
    width: 180,
    height: 45
  },
  input: {
    display: 'none',
  },
  margin: {
    marginTop: 100,
  },
 container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
 }
});




class Home extends Component {

  state = {
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  }

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
    
        <Grid container justify="center" alignItems="center" className={classes.margin}> 
          <img src="./images/newpiggy.png" alt='piggy'/>
        </Grid>
        <form className={classes.container} noValidate autoComplete="off">
        {/* <Grid container justify="center" alignItems="center" >
        <TextField
        required
          id="HomeEmail"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          InputProps={{ disableUnderline: true, }}
        />
        </Grid>
        <Grid container justify="center" alignItems="center">
        <TextField
        required
          id="homePassword"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          InputProps={{ disableUnderline: true, }}
        />
      </Grid> */}
      </form>

      <Grid container justify="center" alignItems="center">
        <Button  variant="contained" color="primary" className={classes.button} href='/Account'>
          Sign up (It's Free!)
        </Button>
      </Grid>
      
      
      <br></br>
      <Grid container justify="center" alignItems="center">
        <Typography>Have an account?</Typography>
        <a href='../SignIn'>&nbsp;Sign in</a>
      </Grid>
      <br></br>
      {/* <Grid container justify="center" alignItems="center">
      <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms and Conditions</a>
      </div>
      </Grid> */}
      </>
    )
  }
}
  Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Home);




