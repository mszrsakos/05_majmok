module.exports = (objRep, { respondWithJson = true } = {}) => {
    const { bananaModel } = objRep;
    return (req, res, next) => {
        const bananas = bananaModel.find();
        if (respondWithJson) return res.status(200).json(bananas);
        res.locals.bananas = bananas;
        return next();
    };
};