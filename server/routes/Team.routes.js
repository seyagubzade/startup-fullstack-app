const express = require("express")
const {TeamStartupControllers} = require("../controllers/Team.controllers")
const router = express.Router()

router.get("/", TeamStartupControllers.getAll)
router.get("/:id", TeamStartupControllers.getById)
router.post("/", TeamStartupControllers.add)
router.delete("/:id", TeamStartupControllers.delete)

module.exports = router;