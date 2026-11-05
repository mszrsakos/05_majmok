module.exports = (objRep) => {
    const { bananaModel } = objRep;
    return (req, res, next) => {
        return res.status(200).json(bananaModel.find());
    };
};