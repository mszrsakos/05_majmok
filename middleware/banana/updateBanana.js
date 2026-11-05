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
    const { bananaModel, db } = objRep;
    return (req, res, next) => {
        const body = req.body ?? {};
        if (typeof body.color === 'undefined' &&
            typeof body.sweet === 'undefined' &&
            typeof body.monkeyId === 'undefined') {
            return res.status(400).json({ error: 'Missing banana fields to update' });
        }

        const banana = res.locals.banana;
        if (typeof body.color !== 'undefined') banana.color = body.color;
        if (typeof body.sweet !== 'undefined') banana.sweet = body.sweet;
        if (typeof body.monkeyId !== 'undefined') banana.monkeyId = body.monkeyId;

        bananaModel.update(banana);
        return db.saveDatabase(err => {
            if (err) return next(err);
            return res.status(200).json(banana);
        });
    };
};