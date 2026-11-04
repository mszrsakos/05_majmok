const getMonkey = (req, res, next) => {
    res.status(200).json(monkeys[res.locals.monkeyIndex]);
}