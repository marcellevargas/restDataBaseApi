module.exports = app => {
    const dataBaseStructure = app.data.database;
    const controller = {};

    controller.database = (req,res) => res.status(200).json(dataBaseStructure);

    return controller;
}