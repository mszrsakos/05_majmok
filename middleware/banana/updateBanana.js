// const updateBanana = (req, res, next) => {
//     if (typeof req.body.color !== 'undefined') {
//         bananas[res.locals.bananaIndex].color = req.body.color;
//     }
//     if (typeof req.body.sweet !== 'undefined') {
//         bananas[res.locals.bananaIndex].sweet = req.body.sweet;
//     }
//     if (typeof req.body.monkeyId !== 'undefined') {
//         bananas[res.locals.bananaIndex].monkeyId = req.body.monkeyId;
//     }

//     if ((typeof req.body.color === 'undefined') && (typeof req.body.sweet === 'undefined')) {
//         return res.status(400).json({ error: 'Missing color, sweet!' })
//     }
//     return res.status(200).json(bananas[res.locals.bananaIndex]);
// }
// module.exports = updateBanana;

module.exports = (objRep) => { 
    const { bananas } = objRep; 
    return (req, res, next) => { 
        if (typeof req.body.color !== 'undefined') { 
            bananas[res.locals.bananaId].color = req.body.color; 
        } 
        if (typeof req.body.sweet !== 'undefined') { 
            bananas[res.locals.bananaId].sweet = req.body.sweet; 
        } 
        if ((typeof req.body.color === 'undefined') && (typeof req.body.sweet === 'undefined')) { 
            return res.status(400).json({ error: 'Missing color or sweet!' }); 
        } 
        return res.status(200).json(bananas[res.locals.bananaId]); 
    }; 
}; 