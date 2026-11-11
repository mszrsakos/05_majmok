module.exports = (objRep) => {
    const { monkeyModel } = objRep;
    return (req, res, next) => {
        const monkeys = monkeyModel.find();
        console.table(monkeys);
        res.locals.monkeys = monkeys;
        return next();
    };
};
