module.exports = (objRep) => {
    const { monkeyModel } = objRep;
    return (req, res, next) => {
        const monkey = monkeyModel.findOne({ id: req.params.id });
        if (!monkey) {
            return res.status(404).json({ error: `Monkey not found with id: ${req.params.id}` });
        }
        res.locals.monkey = monkey;
        return next();
    };
};