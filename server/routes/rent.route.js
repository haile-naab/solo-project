const RentController = require('./../controllers/rent.controller');

module.exports = (app)=>{
    app.get('/api/rent', RentController.getAll);
    app.post('/api/rent', RentController.create);
    app.get('/api/rent/:id', RentController.getOne);
    app.put('/api/rent/:id', RentController.update);
    app.delete('/api/rent/:id', RentController.delete);
}