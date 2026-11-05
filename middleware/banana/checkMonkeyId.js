module.exports = (objRep) => (req, res, next) => {
    const { monkeys } = objRep;
    const monkeyId = req.body.monkeyId;

    if (monkeyId === undefined || monkeyId === null) {
        return next();
    }

    if (!Number.isInteger(monkeyId)) {
        return res.status(400).json({ error: 'monkeyId must be an integer' });
    }

    if (!monkeys.some(monkey => monkey.id === monkeyId)) {
        return res.status(400).json({ error: 'Monkey does not exist' });
    }

    next();
};