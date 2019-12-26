const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const app = express();

const db = require('./config/db').database;

//database connection

mongoose.connect(db,{ useNewUrlParser: true})
    .then(() => {
        console.log('Database Connected Successfully')
    })
    .catch((err) =>{
        console.log('Unable to connect with database', err)

    });

    // Defining the port

    const port = process.env.PORT || 3000;

    //initialize cors middleware
    app.use(cors());

    //initailize bodyParser middle ware
    app.use(bodyParser.json());

    //initailize public directory
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'public/index.html'));
    // });

    app.get('/', (req, res) => {
        res.send('<h1>WELCOME</h1>')
    });

    const employeeRoutes = require('./routes/apis/employee');

    app.use('/employee', employeeRoutes) 


    app.listen(port, () => {
        console.log('server started on port', port)
        
    });