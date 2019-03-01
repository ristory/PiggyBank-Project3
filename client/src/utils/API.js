import axios from "axios";


// Creat budget for user
export const createBudget = function(budgetData) {
        return axios.post("/api/createbudget", budgetData)
}

// Gets All budget  
export const getBudget = function() {
    return axios.get("/api/getbudget/")
}

// Get All My budgets
export const getuserBudget = function( username ) {
    return axios.get("/api/getbudget/" + username)
}

// Get My budget for selected month year
export const getmyBudget = function( username, month, year ) {
    return axios.get("/api/getmybudget/" + username + "/" + month + "/" + year)
}

// Update the budget with the given id
export const updatemyBudget = function(id, budget) {
    console.log(`budget: ${budget}`)
    return axios.put("/api/updatemybudget/" + id, budget)
}
