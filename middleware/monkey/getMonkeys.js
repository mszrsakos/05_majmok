// const getMonkeys = (req, res, next) => {
//     const { monkeys } = objRep; 
//     console.table(monkeys);
//     return res.json(monkeys);
// }
// module.exports = getMonkeys;

module.exports = (objRep) => { 
    const { monkeys } = objRep; 
    return (req, res, next) => { 
        console.table(monkeys); 
        return res.status(200).json(monkeys); 
    }; 
}; 