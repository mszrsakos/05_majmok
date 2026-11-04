const deleteMonkeyBananas = (req, res, next) => {
    const monkeyID = monkeys[res.locals.monkeyIndex].id;
    bananas = bananas.filter(b => b.monkeyId !== monkeyID);
    next();
};
module.exports = deleteMonkeyBananas;