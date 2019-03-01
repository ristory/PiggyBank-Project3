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

class Savings extends Component{
    state = {
      dataDoughnut: {
                      labels: ["JAN", "FEB", "MAR", "ARP", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                      datasets: [
                        {
                          data: [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000],
                          backgroundColor: ["Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Gray", "Olive", "Gold", "Magenta", "Peru", "DarkSlateBlue"],
                          hoverBackgroundColor: [
                            "#FF5A5E",
                            "#5AD3D1",
                            "#FFC870",
                            "#A8B3C5",
                            "#616774"
                          ]
                        }
                      ],
                    },
      selectedusername: "team6",
      selecteddate: Moment(new Date()).format("YYYY-MM-DD"),
      selectedmonth: Moment(new Date()).format("MM"),
      selectedyear: Moment(new Date()).format("YYYY"),                  
      allbudget: [],              
    }

   // load all budgets when page up
   componentWillMount() {  
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
    if (this.state.allbudgets[i].year == this.state.selectedyear)
    {
      isExist = true
    }
  }

  if (isExist) {
    this.getallbudget()  
    // Logic to be updated
    // for (let i=0; i<this.state.budgets.length; i++){
    //   for (let k=0; k<this.state.budgets[i].expenses.length; k++){
    //     let expenses = []
    //     expenses.push(this.state.budgets[i].expenses[k].catagory)
    //     this.setState({expenses})
    //     // this.state.dataDoughnut.labels.push(this.state.budgets[i].expenses[k].catagory)
    //   }       
    // }
  }
  else {
    alert('No budget set up for selected year')    
  }           
}

    render() {

    const { classes } = this.props;

    return (
      <>
      <NavBar />
      <Grid container justify="center" alignItems="center"> 
        <div className={classes.headtitle}>View Your Yearly Savings</div>
      </Grid> 
      <Grid container justify="center" alignItems="center"> 
      <List subheader={<ListSubheader className={classes.title}>Select Your Budget Year</ListSubheader>}>
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

Savings.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Savings);