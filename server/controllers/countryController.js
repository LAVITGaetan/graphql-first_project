var Countrydb = require('../models/model');

// create and save new country
exports.create = (req,res) => {
    if(!req.body) {
        res.status(400).send({message: 'Content cannot be empty'});
        return;
    }

    // new country
    const country = new Countrydb ({
        name: req.body.name,
        capital: req.body.capital,
        status: req.body.status
    })

    country
    .save(country)
    .then(data => {
      //  res.send(data)
      res.redirect('/');
    })
    .catch(err => {
        res.status(500).send({
            message :err.message || "Error when trying to add data"
        });
    });
}

// Retrive countries
exports.find = (req,res) => {

    if(req.query.id) {
        const id =req.query.id;
        Countrydb.findById(id)
        .then(data => {
            if(!data) {
                res.status(404).send({message: "Error, Country not found maybe"})
                return;
            }else {
                res.send(data);
                return;
            }

        })
    }

    if(!req.body) {
        res.status(400).send({message: 'Body cannot be empty'});
        return;
    }

    Countrydb.find()
    .then(country => {
        res.send(country)
    })
    .catch(err => {
        res.status(500).send({
            message :err.message || "Error when trying to get data"
        });
    }) 
}

// Update country with id
exports.update = (req,res) => {
    if(!req.body) {
        res.status(400).send({message: 'Data to update cannot be empty'});
        return;
    }
    const id = req.params.id;
    Countrydb.findByIdAndUpdate(id, req.body, {userFindAndModify:false})
    .then(data => {
        if(!data) {
            res.status(404).send({message: "Error, Country not found maybe"})
            return;
        }else {
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message:"Error when updating country"})
    })
}

// Delete country with id
exports.delete = (req,res) => {
    if(!req.body) {
        res.status(400).send({message: 'Data to update cannot be empty'});
        return;
    }
    const id = req.params.id;
    Countrydb.findByIdAndDelete(id)
    .then(data => {
        if(!data) {
            res.status(404).send({message: "Error, Country not found maybe"})
            return;
        }else {
            res.send({message: "Country deleted with success"})
        }
    })
    .catch(err => {
        res.status(500).send({message:"Error when updating country"})
    })
}