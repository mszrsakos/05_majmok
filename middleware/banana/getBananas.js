const getBananas = (req, res, next) => {
    console.table(bananas);
    return res.json(bananas);
}
module.exports = getBananas;