require('dotenv').config();
const express = require('express')
const port = process.env.PORT || 3000;
const app = express()  
const addRoutes = require('./route/');       
            

app.use(express.json());                    
addRoutes(app);


app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();   // hadd válaszoljon rá az Express magától
    }
    res.status(404).json({
        error: 'Not found',
        method: req.method,
        path: req.originalUrl
    });
});

// var server = app.listen(3000, function () { 
//     console.log('Server running on http://localhost:3000'); // Konzolra kiír egy üzenetet, hogy a szerver fut és melyik porton érhető el.
// });


 app.listen(port, function () 
 { 
    console.log(`Server running on http://localhost:${port}`); 
});