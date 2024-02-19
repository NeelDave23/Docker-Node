const controller = require("../controllers/users");
const router = require("express").Router();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.createUser);
router.post("/update/:id", controller.updateUser);
router.post("/delete/:id", controller.deleteUser);

module.exports = router;
