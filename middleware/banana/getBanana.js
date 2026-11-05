// const getBananaIndex = (req, res, next) => {
//     const bananaIdAsNumber = parseInt(req.params.id, 10);
//     let foundId = -1;
//     for (let i = 0; i < bananas.length; i++) {
//         if (bananas[i].id === bananaIdAsNumber) {
//             foundId = i;
//             break;
//         }
//     }

//     if (foundId === -1) {
//         return res.status(404).json({
//             Error: `Requested bananaID not found! ${req.params.id}`
//         });
//     }
//     res.locals.bananaIndex = foundId
//     return next();
// }
// module.exports = getBananaIndex;

module.exports = (objRep) => {
    const { bananaModel } = objRep;
    return (req, res, next) => {
        const banana = bananaModel.findOne({ id: req.params.id });
        if (!banana) {
            return res.status(404).json({ error: `Banana not found with id: ${req.params.id}` });
        }
        res.locals.banana = banana;
        res.locals.bananas = banana;
        return next();
    };
};