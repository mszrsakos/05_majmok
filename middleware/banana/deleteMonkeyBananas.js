module.exports = (objRep) => (req, res, next) => {
    const { bananaModel } = objRep;
    bananaModel.removeWhere({ monkeyId: res.locals.monkey.id });
    return next();
};