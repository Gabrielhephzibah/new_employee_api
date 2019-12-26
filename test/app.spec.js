const supertest = require('supertest');
const assert = require('assert');
const employee = require('../routes/apis/employee');



    //test for adding a new employee
describe("POST /new", function(){
    it("it shoud return the new employee details that is created", function(){

        supertest(employee)
          .post("/new")
          .send({
            employeeId: "employeeId",
            employee_name: "employee_name",
            employee_age: "employee_age",
            employee_phonenumber: "employee_phonenumber",
            employee_email: "employee_email",
            employee_salary: "employee_salary"
            
          })
          .expect({
            employeeId: "employeeId",
            employee_name: "employee_name",
            employee_age: "employee_age",
            employee_phonenumber: "employee_phonenumber",
            employee_email: "employee_email",
            employee_salary: "employee_salary"
           
        })
          .expect(function(res) {
            assert.equal(res.body.message, "new employee is created successfully");
            done();
          });
      });

      it("it should return status code 400 if nothing is sent", function(){
        supertest(employee)
          .post("/new")
          .send({})
          .expect(400)
          .expect(function(res) {
            assert.equal(res.body.message, "nothing is sent");
            done();
          });
      });
    });

    
        //Test for getting all the employee

    describe("GET /", function() {
        it("it should return the detail of all the employee", function() {
          supertest(employee)
            .get("/")
            .expect({
                employeeId: "employeeId",
                employee_name: "employee_name",
                employee_age: "employee_age",
                employee_phonenumber: "employee_phonenumber",
                employee_email: "employee_email",
                employee_salary: "employee_salary"
            })
            .end(function(err, res){
              if (err) done(err);
              done();
            });
        });
      });
    
    
        //Test for getting a single employee details
    
      describe("GET /single/:id", function() {
        it("it should return the account details of a single bank account", function() {
          let singleAccount= {
            employeeId: "employeeId",
            employee_name: "employee_name",
            employee_age: "employee_age",
            employee_phonenumber: "employee_phonenumber",
            employee_email: "employee_email",
            employee_salary: "employee_salary"
            
               }
            supertest(employee)
              .get("/single/:id")
              .expect({ singleAccount })
                .expect(function(res) {
                  assert.equal(res.body.message, "Single employee details" );
                  done();
              });
        });
      });
      
      //test for updating the details of a particular employee

      describe("PUT /update/:id", function(){
        it("it shoud return the details of the particular employee that is updated", function(){
          let updateAccount = {
            employeeId: "employeeId",
            employee_name: "employee_name",
            employee_age: "employee_age",
            employee_phonenumber: "employee_phonenumber",
            employee_email: "employee_email",
            employee_salary: "employee_salary"
            
          }
            supertest(employee)
              .post("/update/:id")
              .send({updateAccount})
              .expect(updateAccount)
              .expect(function(res) {
                assert.equal(res.body.message, "Employee Updated Successfully" );
                done();
              });
          });
          it("it shoud return status code 200 if employee is successfully updated", function(){
            supertest(employee)
              .post("/update/:id")
              .send({})
              .expect(200)
              .expect(function(res) {
                assert.equal(res.body.message,);
                done();
              });
          });
  
          it("it shoud return status code 400 if nothing is sent", function(){
            supertest(employee)
              .post("/update/:id")
              .send({})
              .expect(400)
              .expect(function(res) {
                assert.equal(res.body.message, "nothing is updated");
                done();
              });
          });
        });
    
  
  
        //Test for deleting an employee details
  
        describe("DELETE /:id", function(){
          it("it should return details of the account deleted", function(){
            let deleteAccount = {
                employeeId: "employeeId",
                employee_name: "employee_name",
                employee_age: "employee_age",
                employee_phonenumber: "employee_phonenumber",
                employee_email: "employee_email",
                employee_salary: "employee_salary"
                
            }
              supertest(employee)
                .delete("/:id")
                .expect(deleteAccount)
                .expect(function(res) {
                  assert.equal(res.body.message, "Employee Deleted Successfully");
                  done();
                });
            });
            it("it shoud return status code 200 if account is successfully deleted ", function(){
              supertest(employee)
                .post("/:id")
                .expect(200)
                .expect(function(res) {
                  assert.equal(res.body.message,);
                  done();
                });
            });
    
            it("it shoud return status code 400 if no account is sent", function(){
              supertest(employee)
                .post("/:id")
                .send({})
                .expect(400)
                .expect(function(res) {
                  assert.equal(res.body.message, "nothing is deleted");
                  done();
                });
            });
  
  
          });
  
  
    
    
 