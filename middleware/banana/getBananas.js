module.exports = (objRep) => { 
    const { bananas } = objRep; 
    return (req, res, next) => { 
        console.table(bananas); 
        return res.status(200).json(bananas); 
    }; 
}; 