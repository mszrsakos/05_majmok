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


// module.exports = (objRep) => { 
//     const { bananas } = objRep; 
//     return (req, res, next) => { 
//         if (typeof req.body.color == 'undefined' || typeof req.body.sweet == 'undefined') { 
//             return res.status(400).json({ error: 'Missing color or sweet' }); 
//         } 
//         const newBanana = { 
//             id: objRep.nextId, 
//             color: req.body.color, 
//             sweet: req.body.sweet, 
//             monkeyId: req.body.monkeyId ?? null 
//         }; 
//         bananas.push(newBanana); 
//         objRep.nextId++; 
//         return res.status(201).json(newBanana); 
//     }; 
// }; 

module.exports = (objRep) => { 
    const { bananaModel, db, uuid } = objRep; 
    return (req, res, next) => { 
        const body = req.body ?? {};
        if (typeof body.color === 'undefined' || typeof body.sweet === 'undefined') { 
            return res.status(400).json({ error: 'Missing color or sweet' }); 
        } 
        const newBanana = { 
            id: uuid.v4(), 
            color: body.color, 
            sweet: body.sweet, 
            monkeyId: body.monkeyId ?? null 
        }; 
        res.locals.banana = bananaModel.insert(newBanana); 
        db.saveDatabase(err => { 
            if (err) { 
                return next(err); 
            } 
            return res.status(201).json(res.locals.banana); 
        }); 
    }; 
};