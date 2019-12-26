const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');


//Get all the employee details
router.get('/', (req, res, next) => {
    Employee.find()
    .then((posts) => {
        res.json(posts);
    })
    .catch(err => console.log(err))

});


//Get only on single employee details
router.get('/single/:id', (req, res, next) => {
    //Grab the id of the bank account
    let id = req.params.id;
    Bank.findById(id)
        .then((employee) => {
            res.json(employee);
        
        })
        .catch(err => console.log(err))
});


//add a new employee
router.post('/new', (req, res, next) => {
    const employeeId = req.body.employeeId;
    const employee_name = req.body.employee_name;
    const employee_age = req.body.employee_age;
    const employee_phonenumber = req.body.employee_phonenumber;
    const employee_email = req.body.employee_email;
    const employee_salary = req.body.employee_salary;
    newEmployee = new Employee({
       employeeId: employeeId,
       employee_name: employee_name,
       employee_phonenumber: employee_phonenumber,
       employee_email: employee_email,
       employee_age: employee_age,
       employee_salary: employee_salary
    });
    newEmployee.save()
    .then(employer => {
        res.json(employer);
    })
    .catch(err => console.log(err));
})


//To updatae the details of a particular employee 

router.put('/update/:id', (req, res, next) => {
    let id = req.params.id
     Employee.findById(id)
    .then(employee => {
        employee.employeeId = req.body.employeeId;
        employee.employee_name = req.body.employee_name;
        employee.employee_age = req.body.employee_age;
        employee.employee_phonenumber = req.body.employee_phonenumber;
        employee.employee_email = req.body.employee_email;
        employee.employee_salary = req.body.employee_salary;  
        employee.save()
        .then(employee => {
            res.send({message: 'Employee details updated successfully',
            status: 'updated successful',
            newdetails: employee
        })
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

});


//To delete the details of a particular employee

router.delete('/:id',(req, res, next) => {
    let id = req.params.id
    Employee.findById(id)
    .then(employee => {
        employee.delete()
        .then(employee => {
            res.send({message: 'Employee details deleted successfully',
            status: 'deleted successful',
            deleted_employee: employee
        })
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

});

module.exports = router;