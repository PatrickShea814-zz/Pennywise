const router = require("express").Router();
const controller = require("../../controllers/index");

// Matches with "/api/users"
router.route("/")

  ;

// Matches with "/api/users/getPublicKey"
router
  .route("/getPublicKey")
  .get(controller.publicKey)

router
  .route("/get_access_token")
  .post(controller.getAccessToken)

router
  .route("/transactions/:id")
  .get(controller.transactions)

router
  .route("/auth")
  .post(controller.authAPI)

router
  .route("/update")
  .post(controller.updateUser)

router
  .route("/mail")
  .post(controller.mail)

module.exports = router;
