const express = require('express');
const { initDatabase } = require('./service/db');
const addRoutes = require('./route');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
initDatabase((err, result) => {
 if (err) {
 return console.error(err);
 }
 const { db, monkeyModel, bananaModel } = result;
 addRoutes(app, db, monkeyModel, bananaModel);
 app.use((req, res, next) => {
 if (req.method === 'OPTIONS') {
 return next(); // hadd válaszoljon rá az Express magától
 }
 res.status(404).json({
 error: 'Not found',
 method: req.method,
 path: req.originalUrl
 });
 });
 app.listen(3000, function () {
 console.log('Server running on http://localhost:3000');
 });
});