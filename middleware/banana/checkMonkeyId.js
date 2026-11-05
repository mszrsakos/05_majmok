module.exports = (objRep) => (req, res, next) => {
    const { monkeyModel } = objRep;
    const monkeyId = req.body?.monkeyId;

    if (monkeyId === undefined || monkeyId === null) {
        return next();
    }

    if (typeof monkeyId !== 'string') {
        return res.status(400).json({ error: 'monkeyId must be a string' });
    }

    if (!monkeyModel.findOne({ id: monkeyId })) {
        return res.status(400).json({ error: 'Monkey does not exist' });
    }

    next();
};