module.exports = (objRep, { respondWithJson = true } = {}) => {
    const { monkeyModel } = objRep;
    return (req, res, next) => {
        const monkeys = monkeyModel.find();
        if (respondWithJson) return res.status(200).json(monkeys);
        res.locals.monkeys = monkeys;
        return next();
    };
};