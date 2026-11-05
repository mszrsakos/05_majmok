module.exports = (objRep) => {
    const { monkeyModel, db } = objRep;
    return (req, res, next) => {
        const body = req.body ?? {};
        if (body.name === undefined && body.sex === undefined && body.species === undefined) {
            return res.status(400).json({ error: 'Missing name, sex or species' });
        }

        const monkey = res.locals.monkey;
        if (body.name !== undefined) monkey.name = body.name;
        if (body.sex !== undefined) monkey.sex = body.sex;
        if (body.species !== undefined) monkey.species = body.species;

        monkeyModel.update(monkey);
        return db.saveDatabase(err => {
            if (err) return next(err);
            return res.status(200).json(monkey);
        });
    };
};