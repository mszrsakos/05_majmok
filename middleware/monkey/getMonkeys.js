module.exports = (objRep) => {
    const { monkeyModel } = objRep;
    return (req, res, next) => {
        return res.status(200).json(monkeyModel.find());
    };
};