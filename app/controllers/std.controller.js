const Student = require('../models/std.model')

//Create post
exports.create = async (req, res) =>{
    if(!req.body.major){
        return res.status(400).send({
            'message': 'Major cant be empty'
        })
    }
    const student = new Student({
        name: req.body.name || 'Untitled',
        age: req.body.age,
        major: req.body.major
    })
    //save any info to mongoDB
    await student.save() 
        .then(data => res.send(data))
        .catch(err =>{
            res.status(500).send({
                'message': 'Something went wrong..',
                'error': err
            })
        });
}

//Find all post
exports.findAll = async (req, res) =>{
    Student.find().then(
        students =>{
        res.send(students)
        }
    ).catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong..',
            'error': err
        })
    });
}
//Find one only
exports.findOne = async (req, res) =>{
    Student.findById(req.params.id).then(
        students =>{
            if(!students){
                res.status(404).send({
                    "message" : "ID not found"
                })
            }
        res.send(students)
        }
    ).catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong..',
            'error': err
        })
    });
}
//Update post
exports.update = async (req, res) =>{
    if(!req.body.major){
        return res.status(400).send({
            'message': 'Major cant be empty'
        })
    }
    Student.findByIdAndUpdate(req.params.id,{
        name: req.body.name || 'Untitled',
        age: req.body.age,
        major: req.body.major
    }, {new : true}).then(
        students =>{
            if(!students){
                res.status(404).send({
                    "message" : "ID not found"
                })
            }
        res.send(students)
        }
    ).catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong..',
            'error': err
        })
    });
}
//Delete
exports.delete = async (req, res) =>{
    Student.findByIdAndRemove(req.params.id).then(
        students =>{
            if(!students){
                res.status(404).send({
                    "message" : "ID not found"
                })
            }
            res.send({
                'message': 'ID got deleted!!'
            })
        }
    ).catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong..',
            'error': err
        })
    });
}