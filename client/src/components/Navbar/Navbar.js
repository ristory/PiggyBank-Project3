import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import PieChartIcon from '@material-ui/icons/PieChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AccountCircle from '@material-ui/icons/AccountCircle';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    marginTop: 50,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 200,
    backgroundColor: theme.palette.background.paper,
  },

  fullList: {
    width: 'auto',
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bigAvatar: {
    width: 200,
    height: 150,
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  appName: {
    fontSize: "18px",
    color: "white",
  }
});


class NavBar extends Component {
  state = {
    left: false,
    open: false,
    value: 0,
  };
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

render () {

  const { classes } = this.props;
  const { open } = this.state;

    const sideList = (
      <div className={classes.list}>
        <List >
        <Grid container justify="center" alignItems="center"> 
          <img src="./images/newpiggy.png" alt='piggy'/>
        </Grid>
        </List>
        <Divider /> 

        <List >
        {[<Link to='/MainPage'>Budgets</Link>, <Link to='/Savings'>Savings</Link>, <Link to='/Spendings'>Spendings</Link>,<Link to='/AboutUs'>About Us</Link>].map((text, index) => (

            <ListItem button key={text}>
              <ListItemIcon>{index  === 0 ? <AttachMoneyIcon /> : index  === 1 ? <AccountBalanceWallet /> : 
              index === 2 ? <PieChartIcon />  : index === 3 ?<AccountCircle /> : <AccountCircle />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  return (
    <>
      <AppBar position="static">
        <AppBar position="fixed" color="primary" className={classes.appBar} >
        <Toolbar className={classes.toolbar}>      
          <Button onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>  
          <Typography className={classes.appName}>
          Piggy Bank
          </Typography>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <Avatar alt="Remy Sharp" src="./images/taylor2.jpg"/>
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem><Link to='/AccountInfo'>My Account</Link></MenuItem>
                      <MenuItem><Link to='/'>Log Out</Link></MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
        <SwipeableDrawer 
        
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
          x
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
          
        </SwipeableDrawer>   
      </AppBar>
    
    
    <Paper className={classes.margin} >
        <Tabs 
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab  label="Budgets" href='/MainPage' />
          <Tab label="Savings" href='/Savings'/>
          <Tab label="Spendings" href='/Spendings'/>
        </Tabs>
      </Paper>
    
</>
  );
}
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);