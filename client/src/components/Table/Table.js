import React, { Component } from 'react';
import PropTypes, { bool } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import { createBudget } from "../../utils/API";
import { getBudget } from "../../utils/API";
import { getmyBudget } from "../../utils/API";
import { updatemyBudget } from "../../utils/API";
import Moment from 'moment';
import Grid from '@material-ui/core/Grid';
import AddTable from './AddTable'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    marginLeft: 10,
  },
  textField: {
    flexBasis: 200,
  },
  logo2: {
    textAlignment: "center"
  }
});

class Table extends Component {
   state = {
      selectedIndex: 0,
      selectedusername: "team6",
      selecteddate: Moment(new Date()).format("YYYY-MM-DD"),
      selectedmonth: Moment(new Date()).format("MM"),
      selectedyear: Moment(new Date()).format("YYYY"),   
      initialbudgets: [ {
                        username: 'team6',
                        month: Moment(new Date()).format("MM"),
                        year: Moment(new Date()).format("YYYY"),   
                        income: 0,
                        expenses: [
                                    {
                                      catagory: 'Rent',
                                      budgetamt: 0
                                    },
                                    {
                                      catagory: 'Utilites',
                                      budgetamt: 0
                                    },
                                    {
                                      catagory: 'Car Insurance',
                                      budgetamt: 0
                                    },
                                  ]
                        }
                      ],             
      budgets: [], 
      allbudgets: [],          
    }


  
  // load all budgets when page up
  
  componentWillMount() {
    // this.createmybudget(this.state.initialbudgets)
    this.getallbudget()  
    this.getonebudget(this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear) 
  }

  // When the component mounts, load budget
  componentDidMount() {  
    // console.log(this.state.allbudgets.length)
    this.getonebudget(this.state.selectedusername, this.state.selectedmonth, this.state.selectedyear)   
  }

  componentDidUpdate() {
  }

  update = () => {
    console.log(this.props.value);
    if (this.props.value != null)
    {
      this.state.budgets[0].expenses.push(this.props.value) ;
    }
    else{}
      console.log(this.state.budgets[0]) ;

  }

  // initial create budget when no budget find
  createmybudget = bg => {
    createBudget(bg)
      .then(res => this.setState({ budgets: res.data }))
      .catch(err => console.log(err));
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

  // Update budget
  updatebudget = (id, budget) => {  
    console.log('update my budget income')
    console.log(id)
    updatemyBudget(id, budget)
      .then(res => {} )
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
      
    }
    else {
      console.log('Need to create budget for new selected month')
      let tempbudgets =  [ {
                            username: 'team6',
                            month: this.state.selectedmonth,
                            year: this.state.selectedyear,   
                            income: 0,
                            expenses: [
                                        {
                                          catagory: 'Rent',
                                          budgetamt: 0
                                        },
                                        {
                                          catagory: 'Utilites',
                                          budgetamt: 0
                                        },
                                        {
                                          catagory: 'Car Insurance',
                                          budgetamt: 0
                                        },
                                      ]
                            }
                          ]       
      this.createmybudget(tempbudgets)
    }
    this.getallbudget()            
  }

  
  handleIncomeAsync = async function (e, index, budgetid) {
    let response = await new Promise((resolve, reject) => {
      console.log(e.target.value)
      let budgets = this.state.budgets
      budgets[index].income = e.target.value
      this.setState({budgets: budgets})
      resolve(true)
    })
    return response
  }

  handleExpenseAsync = async function (e, index, eindex, budgetid) {
    let response = await new Promise((resolve, reject) => {
      console.log(e.target.value)
      let budgets = this.state.budgets
      budgets[index].expenses[eindex].budgetamt = e.target.value
      this.setState({budgets: budgets})
      resolve(true)
    })
    return response
  }

  // Handle when income change

  handleIncomeChange = (e, index, budgetid) => {
    // console.log("update income change")
    let budgets = this.state.budgets
    budgets[index].income = e.target.value
    this.setState({budgets: budgets})
    this.updatebudget(budgetid)
    // console.log('Input income:' + e.target.value)
    // console.log("id:" + budgetid)
    // console.log('index' + index)
    // console.log(this.state.budgets)
  }

  handelExpenseChange = (e, bindex, eindex) => {
    let budgets = this.state.budgets
    console.log('target' + e.target.value)
    console.log(budgets[bindex].expenses[eindex].budgetamt)
    budgets[bindex].expenses[eindex].budgetamt = e.target.value
    this.setState({budgets})
    console.log('Input expense value:' + e.target.value)
  }


  // Handle selected expense action
  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { classes } = this.props;   
    return (

      <div className={classes.root}>
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
        <Divider />
        <List subheader={<ListSubheader className={classes.title}>Enter Your Monthly Income</ListSubheader>}>
          {
            this.state.budgets.length > 0 ?
              this.state.budgets.map((budget, bIndex, budgets) => {
                if (bIndex === 0) { console.log(budgets)}
                return (
                <ListItem>
                  <TextField
                    id={budget._id}
                    label=""
                    name="income"
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{ shrink: true, }}
                    InputProps={{
                      startAdornment: <InputAdornment position='start'> $</InputAdornment>,
                      disableUnderline: true,
                    }}
                    margin="normal"
                    value={budget.income}
                    onChange={event => {
                      this.handleIncomeAsync(event, bIndex, budget._id)
                        .then(r => {
                          this.updatebudget(budget._id, budget)
                        })
                    }}
                />
                </ListItem>
                )
                  }
              ) : null
          }
        </List>
        <Divider />
        <List subheader={<ListSubheader className={classes.title}>Expense</ListSubheader>}>
          {
            this.state.budgets.map((budget, bIndex) =>
              budget.expenses.map((expense, index) => index > -1
                ?
                <ListItem
                  button
                  selected={this.state.selectedIndex === index}
                  onClick={event => this.handleListItemClick(event, index)}
                  key={expense._id}
                >
                  <ListItemText primary={expense.catagory} />
                  <TextField
                    id={expense._id}
                    label=""
                    name="budgetamt"
                    value={expense.budgetamt}
                    onChange={event => this.handleExpenseAsync(event, bIndex, index, budget._id)
                                .then(r => {
                                  this.updatebudget(budget._id, budget)
                                })
                              }                  
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{ shrink: true, }}
                    InputProps={{
                      startAdornment: <InputAdornment position='start'> $</InputAdornment>,
                      disableUnderline: true,
                    }}
                    margin="normal"
                  />
                </ListItem>
                : null)
            )
          }
        <Button color="secondary" onClick={this.update}>Update</Button>
        </List> 
      </div>

 )}  
}

Table.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Table);