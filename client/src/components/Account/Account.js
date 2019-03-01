
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 100,
  },
  button: {
    margin: theme.spacing.unit,
    width: 180,
    height: 45
  },

  input: {
    display: 'none',
  }
});

class Account extends Component {
  state = {
    name: '',
    direction: 'column',
    justify: 'center',
    alignItems: 'center',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

    render() {
    const { classes } = this.props;
      return (
        <>
          <Grid container justify="center" alignItems="center"> 
            <img src="./images/newpiggy.png" alt='piggy'/>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Typography variant='h5'>Create My Account</Typography>
          </Grid>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="first-name"
              label="First Name"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              InputProps={{ disableUnderline: true, }}
            />
          </Grid>
          <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="last-name"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              InputProps={{ disableUnderline: true, }}
              />
            <Grid container justify="center" alignItems="center">
            <TextField
              required
              id="AccountEmail"
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
              id="AccountPassword"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              InputProps={{ disableUnderline: true, }}
            />    
            </Grid>
          </Grid>
        </form>
        <br></br>
        <Grid container justify="center" alignItems="center">
          <Button variant="contained" color="primary" className={classes.button} href='/MainPage'>
            Sign Up
          </Button>
        </Grid>
        <br></br>
        <Grid container justify="center" alignItems="center">
          <Typography>Already have an account? </Typography><Link to='/SignIn'>&nbsp;Sign in</Link>
        </Grid>
        <br></br>
        </>
      );
    }
  }

  Account.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Account);
  