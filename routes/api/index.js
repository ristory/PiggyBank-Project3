const router = require("express").Router();
const budgetRoutes = require("./budgets"); 


router.use("/", budgetRoutes);

module.exports = router;