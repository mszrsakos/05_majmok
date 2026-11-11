module.exports = (objRep, { respondWithJson = true } = {}) => {
    const { monkeyModel, db } = objRep;
    return (req, res, next) => {
        const deletedMonkey = res.locals.monkey;
        monkeyModel.remove(deletedMonkey);
        return db.saveDatabase(err => {
            if (err) return next(err);
            if (respondWithJson) return res.status(200).json({ deletedMonkey });
            return next();
        });
    };
};