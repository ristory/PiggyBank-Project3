const router = require("express").Router();
const budgetsControllers = require("../../controllers/budgetsControllers")

// Match with /api
router.route("/createbudget")
    .post(budgetsControllers.createbudget);

router.route("/getbudget")
    .get(budgetsControllers.getbudget)

router.route("/getbudget/:username")
    .get(budgetsControllers.getuserbudget)    

router.route("/getmybudget/:username/:month/:year")
    .get(budgetsControllers.getonebudget)

router.route("/updatemybudget/:id")
    .put(budgetsControllers.updatebudget);


module.exports = router;