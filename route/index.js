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




function addRoutes(app) {

    const monkeys = [
        {
            id: 1,
            name: 'Joe',
            sex: 'male',
            species: 'gibbon'

        },
        {
            id: 2,
            name: 'Josephine',
            sex: 'female',
            species: 'gorilla'
        },
        {
            id: 3,
            name: 'Lajos',
            sex: 'male',
            species: 'orangutan'
        }
    ]

let bananas = [
        {
            id: 1,
            color: "yellow",
            sweet: false,
            monkeyId: null
        },
        {
            id: 2,
            color: "yellow",
            sweet: true,
            monkeyId: null
        },
        {
            id: 3,
            color: "green",
            sweet: true,
            monkeyId: null
        }, {
            id: 4,
            color: "green",
            sweet: false,
            monkeyId: null
        }
    ]
let globalMonkeyId = monkeys.length + 1;
let globalBananaId = bananas.length + 1;

const objRep = {
    monkeys,
    bananas,
    globalMonkeyId,
    globalBananaId
}


app.get('/api/monkey', getMonkeysMW(objRep));
app.post('/api/monkey', createMonkeyMW(objRep));
app.get('/api/monkey/:id', getMonkeyIndexMW(objRep), getMonkeyMW(objRep));
app.delete('/api/monkey/:id', getMonkeyIndexMW(objRep), deleteMonkeyBananasMW(objRep), deleteMonkeyMW(objRep));
app.patch('/api/monkey/:id', getMonkeyIndexMW(objRep), updateMonkeyMW(objRep));

app.get('/api/banana', getBananasMW(objRep)); // Minden banán
app.post('/api/banana', checkMonkeyIdMW(objRep), createBananaMW(objRep));
app.get('/api/banana/:id', getBananaIndexMW(objRep), getBananaMW(objRep));
app.delete('/api/banana/:id', getBananaIndexMW(objRep), deleteBananaMW(objRep));
app.patch('/api/banana/:id', getBananaIndexMW(objRep), checkMonkeyIdMW(objRep), updateBananaMW(objRep));
}
module.exports=addRoutes;