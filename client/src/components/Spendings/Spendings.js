import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BottomNav from '../BottomNav';
import NavBar from '../Navbar'
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Moment from 'moment';
import TextField from '@material-ui/core/TextField';
import { getBudget } from "../../utils/API";
import { getmyBudget } from "../../utils/API";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 200,
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
  },
  input: {
    display: 'none',
  }, 
  headtitle: {
    fontSize: "18px",
    fontWeight: "bold",
    textAlignment: "center"
  }
});

class Spendings extends Component{

state = {
    dataDoughnut: {
                    labels: [],
                    datasets: [
                                {
                                  data: [10,20,30,40,50,60],
                                  backgroundColor: ["Red", "Green", "Yellow", "Grey", "Pink", "Orange"],
                                  hoverBackgroundColor: [
                                    "#FF5A5E",
                                    "#5AD3D1",
                                    "#FFC870",
                                    "#A8B3C5",
                                    "#616774"
                                  ]
                                }
                              ]
                  },
  selectedusername: "team6",
  selecteddate: Moment(new Date()).format("YYYY-MM-DD"),
  selectedmonth: Moment(new Date()).format("MM"),
  selectedyear: Moment(new Date()).format("YYYY"),                  
  budgets: [],
  allbudget: [], 
}

// load all budgets when page up
componentWillMount() {
this.getallbudget()   
}

// When the component mounts, load budget
componentDidMount() {  
  // console.log(this.state.allbudgets.length)
  this.getonebudget(this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear)   
}

// Get All budget from database
getallbudget = () => {
  getBudget()
    .then(res => {
      this.setState({allbudgets: res.data}, function(){
        console.log(this.state.allbudgets.length); 
    }.bind(this));
    })
    .catch(err => console.log(err))
};

// Get uer's budget for selected month year 
getonebudget = (user, month, year) => {
  getmyBudget(user, month, year)
    .then(res => {
          let budgets = []
          budgets.push(res.data)
          this.setState({budgets})
    })
    .catch(err => console.log(err)) 
}

 //Handle when Date change
 handleDateChange = event => {
  console.log("update date change")
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });

  this.state.selectedmonth = Moment(value).format("MM")
  this.state.selectedyear = Moment(value).format("YYYY")
  
  let isExist = false
  for (let i=0; i<this.state.allbudgets.length; i++){
    if ( (this.state.allbudgets[i].month == this.state.selectedmonth) && 
         (this.state.allbudgets[i].year == this.state.selectedyear))
    {
      isExist = true
    }
  }

  if (isExist) {
    this.getonebudget(this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear)  
    for (let i=0; i<this.state.budgets.length; i++){
      for (let k=0; k<this.state.budgets[i].expenses.length; k++){
        let expenses = []
        expenses.push(this.state.budgets[i].expenses[k].catagory)
        this.setState({expenses})
        // this.state.dataDoughnut.labels.push(this.state.budgets[i].expenses[k].catagory)
      }       
    }
  }
  else {
    alert('No budget set up for selected month')    
  }           
}
  
render() {

  const { classes } = this.props;

  return (
    <>
    <NavBar />
    <Grid container justify="center" alignItems="center"> 
      <div className={classes.headtitle}>View Your Monthly Spendings</div>
    </Grid>  
    <Grid container justify="center" alignItems="center"> 
      <List subheader={<ListSubheader className={classes.title}>Select Your Budget Month</ListSubheader>}>
          <ListItem>
            <TextField InputLabelProps={{ shrink: true }}
              autoFocus
              margin="dense"
              id="dateperiod"
              label=""
              type="date"
              fullWidth
              InputProps={{ disableUnderline: true, }}
              name="selecteddate"
              value={this.state.selecteddate}
              onChange={this.handleDateChange}
            />
          </ListItem>
      </List>
    </Grid>
    <Grid container justify="center" alignItems="center"> 
        <Grid container justify="center" alignItems="center">
          <MDBContainer>
            <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
          </MDBContainer>
        </Grid>
    </Grid>
    <Grid container justify="center" alignItems="center"> 
      <BottomNav />
    </Grid>
    </>
  )
}
}

Spendings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spendings);