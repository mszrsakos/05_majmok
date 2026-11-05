// const createBanana = (req, res, next) => {
//     if (typeof req.body.color == 'undefined' || typeof req.body.sweet == 'undefined') {
//         req.status(400).json({ Error: `Missing color or sweet` })
//     }
//     const newBanana = {
//         id: globalBananaId,
//         color: req.body.color,
//         sweet: req.body.sweet,
//         monkeyId: req.body.monkeyId ?? null
//     };

//     bananas.push(newBanana);
//     globalBananaId++;
//     return res.status(201).json(newBanana);
// };
// module.exports = createBanana;


module.exports = (objRep) => { 
    const { bananas } = objRep; 
    return (req, res, next) => { 
        if (typeof req.body.color == 'undefined' || typeof req.body.sweet == 'undefined') { 
            return res.status(400).json({ error: 'Missing color or sweet' }); 
        } 
        const newBanana = { 
            id: objRep.nextId, 
            color: req.body.color, 
            sweet: req.body.sweet, 
            monkeyId: req.body.monkeyId ?? null 
        }; 
        bananas.push(newBanana); 
        objRep.nextId++; 
        return res.status(201).json(newBanana); 
    }; 
}; 