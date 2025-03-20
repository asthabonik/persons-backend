// external imports
const createError = require("http-errors");

// internal imports
const People = require('../../models/user/People');


// Create a new people record 
async function addPeople(req, res, next) {
  // console.log('from addPeople:');
  try {
            
    const dataPeople = req.body;

    // Create a new people using the People model
    const newPeople = new People(dataPeople);

    // console.log('new people:', newPeople);
    const savedPeople = await newPeople.save();    
    // console.log('after save people:', savedPeople);
    
    res.status(200).json(savedPeople);
    // next();
  } catch (error) {
     res.status(500).json({ error: `Failed to create people record...${error}` });
  }
};

// get all peoples
async function getPeoples(req, res, next) {
  // console.log('from getPeople');  
  try {

    // The lean() method returns a plain JavaScript object instead of a Mongoose document, 
    // allowing you to freely add properties.
    const peoples = await People.find().sort({ name: 1 }).lean();  
    // console.log('from getPeoples', peoples);        
    res.status(200).json(peoples);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch peoples' });    
  }
};

// Get a specific people record by ID for a specific user
// '/people/:userId/:peopleId'
async function getPeople(req, res, next) {
  // console.log('from getPeople');
  const peopleId = req.peopleId;
  // console.log('from !getpeople :', req.peopleId);    
  if (!peopleId) {       
    return res.status(404).json({
      errors: {
        common: {
          msg: "Could not find the people!",
        },
      },
    });      
  }
  try {

    // The lean() method returns a plain JavaScript object instead of a Mongoose document, 
    // allowing you to freely add properties.
    let people = await People.findById({
      _id: peopleId,
    }).lean();

    people.personId = req.params.id;  
    // console.log('from getpeople :', people);
    res.status(200).json(people);

  } catch (err) {
    next(err);
  }
};



// Update a specific people record by ID for a specific user
// '/people/:userId/:peopleId'
async function updatePeople(req, res, next){
  console.log('from updatePeople');
  const {name, company, email, job, religion, caste } = req.body;
  try {
    const peopleId = req.params.id;
    const people = await People.findOneAndUpdate(
      { _id: peopleId },
        {
         $set: {          
            name: name,
            company: company,
            email: email,                      
            job, religion, caste
          },
        },
        { 
          useFindAndModify: false,
          new: true, 
        }
    );
    if (!people) {
      return res.status(404).json({ error: 'people record not found.' });
    }
    // console.log('updatedPeople:', people);
    res.json(people);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update people record.' });
  }
};


// Delete a specific people record by ID for a specific user
// '/people/:userId/:peopleId'
async function removePeople(req, res, next){
  // console.log('from removePeople', req.params);
  try {
    const { id } = req.params;
    
    const people = await People.findOneAndDelete({ _id: id });
    if (!people) {
      return res.status(404).json({ error: 'people record not found.' });
    }    
    res.json({ message: 'people record deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete people record.' });
  }
};


module.exports = {
  getPeople, getPeoples, 
  addPeople, 
  removePeople,
  updatePeople
};


