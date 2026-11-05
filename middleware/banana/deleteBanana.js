// const deleteBanana = (req, res, next) => {
//     const deletedBananaById = bananas[res.locals.bananaIndex];
//     bananas.splice(res.locals.bananaIndex, 1);
//     return res.status(200).json({ deletedBananaById })
// }
// module.exports = deleteBanana;

module.exports = (objRep) => {
    const { bananaModel, db } = objRep;
    return (req, res, next) => {
        const deletedBanana = res.locals.banana;
        bananaModel.remove(deletedBanana);
        return db.saveDatabase(err => {
            if (err) return next(err);
            return res.status(200).json({ deletedBanana });
        });
    };
};