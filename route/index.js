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

function addRoutes(app, db, monkeyModel, bananaModel) {
    const objRep = { db, uuid, monkeyModel, bananaModel };


app.get('/monkey', getMonkeysMW(objRep));
app.post('/monkey', createMonkeyMW(objRep));
app.get('/monkey/:id', getMonkeyMW(objRep), (req, res) => res.json(res.locals.monkey));
app.delete('/monkey/:id', getMonkeyMW(objRep), deleteMonkeyBananasMW(objRep), deleteMonkeyMW(objRep));
app.patch('/monkey/:id', getMonkeyMW(objRep), updateMonkeyMW(objRep));

app.get('/banana', getBananasMW(objRep));
app.post('/banana', checkMonkeyIdMW(objRep), createBananaMW(objRep));
app.get('/banana/:id', getBananaMW(objRep), (req, res) => res.json(res.locals.banana));
app.delete('/banana/:id', getBananaMW(objRep), deleteBananaMW(objRep));
app.patch('/banana/:id', getBananaMW(objRep), checkMonkeyIdMW(objRep), updateBananaMW(objRep));
}
module.exports=addRoutes;