module.exports = (objRep, { respondWithJson = true } = {}) => {
    const { monkeyModel, db, uuid } = objRep;
    return (req, res, next) => {
        const body = req.body ?? {};
        if (body.name === undefined || body.sex === undefined || body.species === undefined) {
            return res.status(400).json({ error: 'Missing name, sex or species' });
        }

        const monkey = monkeyModel.insert({
            id: uuid.v4(),
            name: body.name,
            sex: body.sex,
            species: body.species
        });

        return db.saveDatabase(err => {
            if (err) return next(err);
            if (respondWithJson) return res.status(201).json(monkey);
            return next();
        });
    };
};