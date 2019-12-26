const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    employeeId: {
        type: String,
        require: true
    },

    employee_name: {
        type: String,
        require: true
    },

    employee_age: {
        type: String,
        require: true
    },

    employee_phonenumber: {
        type: String,
        require: true
    },

    employee_email: {
        type: String,
        require: true
    },

    employee_salary: {
        type: String,
        require: true
    },

    created_at: {
        type: Date,
        require: Date.now
    },

});

 const Employee = module.exports = mongoose.model('Employee', EmployeeSchema);
