const getMonkeys = (req, res, next) => {
    console.table(monkeys);
    return res.json(monkeys);
}
module.exports = getMonkeys;