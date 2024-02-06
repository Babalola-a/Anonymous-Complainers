import express from "express"; 
import PageController from "../controllers/controller.js"; 

const router = express.Router();
router.route("/").get(PageController.getHomepage);
router.route("/school").get(PageController.getSchool);
export default router; 