import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',  
  },
  margin: {
    margin: theme.spacing.unit,

  },
  textField: {
    flexBasis: 200,
  },
});


class textInput extends Component{
  state = {
    amount: '',
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
        <TextField
            id="standard-number"
            label=""
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              startAdornment: <InputAdornment position='start'> $</InputAdornment>,
              disableUnderline: true,
            }}
            margin="normal"
          />

    );
  }
}

textInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(textInput);