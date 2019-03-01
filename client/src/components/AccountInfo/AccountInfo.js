
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

const styles = theme => ({
  bigAvatar: {
    margin: 20,
    width: 140,
    height: 140,
    marginTop: 80
  },
  root: {
    width: '100%',
    maxWidth: 500,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
  link: {
    margin: 20
  }

});

class User extends Component {
    state = {
        name: 'Taylor',
        lastName: 'Darnell',
        Email: 'tdarnell@gmail.com'
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
      <Avatar alt="Remy Sharp" src="./images/taylor2.jpg" className={classes.bigAvatar} />
    </Grid>
    <hr/>
    <form className={classes.container} noValidate autoComplete="off">
    <Grid container justify="center" alignItems="center">
        <TextField
          id="First-Name"
          label="First Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          //variant="filled"
          InputProps={{ disableUnderline: true, }}
        />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <TextField
          id="Last-Name"
          label="Last Name"
          className={classes.textField}
          value={this.state.lastName}
          margin="normal"
          //variant="filled"
          InputProps={{ disableUnderline: true, }}
        />
      </Grid>
      <Grid container justify="center" alignItems="center">
        <TextField
          required
          id="Email"
          label="Email"
          value={this.state.Email}
          className={classes.textField}
          type='email'
          autoComplete='email'
          margin="normal"
          //variant="filled"
          InputProps={{ disableUnderline: true, }}
        />
        </Grid>
        </form>
      <hr/>
      <Grid container justify="center" alignItems="center">
        <Button variant="contained" color="secondary" className={classes.button}>
        Delete Account
        <DeleteIcon className={classes.rightIcon} />
      </Button>
      </Grid>
      <Grid container justify="center" alignItems="center">
      <Link to='/MainPage' className={classes.link}>Return to Home</Link>
      </Grid>
    </>
  )
}
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);