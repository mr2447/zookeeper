const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals.json');

router.get('/animals', (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
})

router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
        res.json(result)
    } else {
        res.send(404);
    }
    
})
router.post('/animals', (req, res) => {
    console.log("request body 1", req.body)
    // set id based on what the next indexof the array will be
    req.body.id = animals.length.toString();
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("request body 2", req.body)
    if (!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    } else {
    //add animal to json file and animals array in this function
    const animal = createNewAnimal(req.body, animals);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log("animal", animal)
    // re.body is where our incoming content will be 
    
    res.json(animal)
    }
});

module.exports = router;