import express from "express";
import controller from "./controller/controller.js";

const router = express.Router(); 
router.route("/").get((req,res) => { 
    //somethign should happen when we want to get our home page 

})
export default router; 