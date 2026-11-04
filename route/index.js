function addRoutes(app) {
    const objRep={
        id,
        name,
        sex,
        species
    }
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















app.get('/monkey', getMonkeys);
app.post('/monkey', createMonkey);
app.get('/monkey/:id', getMonkeyIndex, getMonkey);
app.delete('/monkey/:id', getMonkeyIndex, deleteMonkeyBananas, deleteMonkey);
app.patch('/monkey/:id', getMonkeyIndex, updateMonkey);

app.get('/banana', getBananas); // Minden banán
app.post('/banana', checkMonkeyId, createBanana);
app.get('/banana/:id', getBananaIndex, getBanana);
app.delete('/banana/:id', getBananaIndex, deleteBanana);
app.patch('/banana/:id', getBananaIndex, checkMonkeyId, updateBanana);
}
module.exports=addRoutes;