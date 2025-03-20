// external imports
const express = require("express");

// internal imports
const { getPeople, getPeoples, addPeople, updatePeople, removePeople } = require("../../controller/people/peopleController");


const router = express.Router();

// get all peoples
router.get("/", getPeoples); 

// get user people here id is personId
router.get("/:id", getPeople); 

// add people here id is personId
router.post("/", addPeople); 

// edit People here id is peopleId
router.put("/:id", updatePeople); 

// delete a specific people record by ID 
router.delete("/:id", removePeople); 

module.exports = router;
