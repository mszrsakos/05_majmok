module.exports = (objRep) => {
    const { monkeyModel, db } = objRep;
    return (req, res, next) => {
        const deletedMonkey = res.locals.monkey;
        monkeyModel.remove(deletedMonkey);
        return db.saveDatabase(err => {
            if (err) return next(err);
            return res.status(200).json({ deletedMonkey });
        });
    };
};