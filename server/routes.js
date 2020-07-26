const router = require("express").Router();
const controllers = require('./controllers.js');

router
.route("/")
.get(controllers.getUsers)
.post(controllers.postUser)

router
.route("/:id")
.get(controllers.getUser)
.put(controllers.updateUser)
.delete(controllers.deleteUser)

module.exports = router;