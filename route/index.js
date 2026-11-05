const uuid = require('uuid'); 
const getMonkeysMW=require('../middleware/monkey/getMonkeys');
const getMonkeyMW=require('../middleware/monkey/getMonkey');
const createMonkeyMW=require('../middleware/monkey/createMonkey');
const updateMonkeyMW=require('../middleware/monkey/updateMonkey');
const deleteMonkeyMW=require('../middleware/monkey/deleteMonkey');

const getBananasMW=require('../middleware/banana/getBananas');
const getBananaMW=require('../middleware/banana/getBanana');
const createBananaMW=require('../middleware/banana/createBanana');
const updateBananaMW=require('../middleware/banana/updateBanana');
const deleteBananaMW=require('../middleware/banana/deleteBanana');
const checkMonkeyIdMW=require('../middleware/banana/checkMonkeyId');
const deleteMonkeyBananasMW=require('../middleware/banana/deleteMonkeyBananas');
const renderMW = require('../middleware/render'); 

function addRoutes(app, db, monkeyModel, bananaModel) {
    const objRep = { db, uuid, monkeyModel, bananaModel };


app.get('/api/monkey', getMonkeysMW(objRep));
app.post('/api/monkey', createMonkeyMW(objRep));
app.get('/api/monkey/:id', getMonkeyMW(objRep), (req, res) => res.json(res.locals.monkey));
app.delete('/api/monkey/:id', getMonkeyMW(objRep), deleteMonkeyBananasMW(objRep), deleteMonkeyMW(objRep));
app.patch('/api/monkey/:id', getMonkeyMW(objRep), updateMonkeyMW(objRep));

app.get('/api/banana', getBananasMW(objRep));
app.post('/api/banana', checkMonkeyIdMW(objRep), createBananaMW(objRep));
app.get('/api/banana/:id', getBananaMW(objRep), (req, res) => res.json(res.locals.banana));
app.delete('/api/banana/:id', getBananaMW(objRep), deleteBananaMW(objRep));
app.patch('/api/banana/:id', getBananaMW(objRep), checkMonkeyIdMW(objRep), updateBananaMW(objRep));

app.get('/', 
        getMonkeysMW(objRep), 
        renderMW(objRep, 'index'));
}

module.exports=addRoutes;