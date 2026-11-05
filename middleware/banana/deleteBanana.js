// const deleteBanana = (req, res, next) => {
//     const deletedBananaById = bananas[res.locals.bananaIndex];
//     bananas.splice(res.locals.bananaIndex, 1);
//     return res.status(200).json({ deletedBananaById })
// }
// module.exports = deleteBanana;

module.exports = (objRep) => { 
    const { bananas } = objRep; 
    return (req, res, next) => { 
        const deletedBanana = bananas[res.locals.bananaId]; 
        bananas.splice(res.locals.bananaId, 1); 
        return res.status(200).json({ deletedBanana }); 
    }; 
}; 