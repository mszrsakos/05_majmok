require('dotenv').config();
const express = require('express')
const port = process.env.PORT || 3000;
const { initDatabase } = require('./service/db'); 
const app = express()  
const addRoutes = require('./route/');       
            

app.use(express.json());                    

initDatabase((err, result) => { 
    if (err) { 
        return console.error(err); 
    } 
    const { db, monkeyModel, bananaModel } = result; 
  
    addRoutes(app, db, monkeyModel, bananaModel); 


    app.use((req, res) => { 
        return res.status(404).json({ error: `Endpoint or method not found: ${req.method} ${req.originalUrl}` }); 
    }); 
        // var server = app.listen(3000, function () { 
        //     console.log('Server running on http://localhost:3000'); // Konzolra kiír egy üzenetet, hogy a szerver fut és melyik porton érhető el.
        // });


    app.listen(port, function () 
    { 
        console.log(`Server running on http://localhost:${port}`); 
    });
});