module.exports = (app) =>{
    const students = require('../controllers/std.controller');

    //Retrieve all students
    app.get('/students', students.findAll);

    //Retrieve a single student by id
    app.get('/students/:id', students.findOne);

    //Post a new student
    app.post('/students', students.create);
    
    //Update a student by id
    app.put('/students/:id', students.update);

    //Delete a student by id
    app.delete('/students/:id', students.delete);

}