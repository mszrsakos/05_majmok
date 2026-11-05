// const deleteMonkey = (req, res, next) => {
//     const deletedMonkeyById = monkeys[res.locals.monkeyIndex];
//     monkeys.splice(res.locals.monkeyIndex, 1);
//     return res.status(200).json({ deletedMonkeyById });
// }
// module.exports = deleteMonkey;

module.exports = (objRep) => { 
    const { monkeys } = objRep; 
    return (req, res, next) => { 
        const deletedMonkey = monkeys[res.locals.monkeyId]; 
        monkeys.splice(res.locals.monkeyId, 1); 
        return res.status(200).json({ deletedMonkey }); 
    }; 
}; 