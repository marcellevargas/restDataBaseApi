module.exports = app => {
    const controller = app.controllers.database;

    app.route('/api/database')
        .get(controller.database)
}