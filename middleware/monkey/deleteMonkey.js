const deleteMonkey = (req, res, next) => {
    const deletedMonkeyById = monkeys[res.locals.monkeyIndex];
    monkeys.splice(res.locals.monkeyIndex, 1);
    return res.status(200).json({ deletedMonkeyById });
}
module.exports = deleteMonkey;