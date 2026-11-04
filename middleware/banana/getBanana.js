const getBanana = (req, res, next) => {
    res.status(200).json(bananas[res.locals.bananaIndex]);

}