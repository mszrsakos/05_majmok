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


const objRep = {
    monkeys,
    bananas,
    nextId: 4
}


app.get('/monkey', getMonkeysMW(objRep));
app.post('/monkey', createMonkeyMW(objRep));
app.get('/monkey/:id', getMonkeyMW(objRep));
app.delete('/monkey/:id', getMonkeyMW(objRep), deleteMonkeyMW(objRep));
app.patch('/monkey/:id', getMonkeyMW(objRep), updateMonkeyMW(objRep));

app.get('/banana', getBananasMW(objRep)); // Minden banán
// app.post('/banana', checkMonkeyIdMW(objRep), createBananaMW(objRep));
app.get('/banana/:id', getBananaMW(objRep));
app.delete('/banana/:id', getBananaMW(objRep), deleteBananaMW(objRep));
app.patch('/banana/:id', getBananaMW(objRep), checkMonkeyIdMW(objRep), updateBananaMW(objRep));
}
module.exports=addRoutes;