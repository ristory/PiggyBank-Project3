const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  username: { type: String },
  month: { type: String },
  year: { type: String },
  income: { type: Number } ,
  expenses : [
    {
      catagory: { type: String },
      budgetamt: { type: Number },
    }
  ]
});


const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;
