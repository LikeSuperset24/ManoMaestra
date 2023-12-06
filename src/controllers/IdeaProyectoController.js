const IdeaProyectoModel = require('../models/IdeaProyectoModel');

class IdeaProyectoController
{
    static async indexGet(req, res) {
        let data = await IdeaProyectoModel.consultar();
        res.send(data);
    }

    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await IdeaProyectoModel.insertar(newData);

            res.status(201)
                .header('Location', `/ideaProyecto/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await IdeaProyectoModel.consultarPorId(id);
        if (data.length == 0) {
            res.status(404).send({errno: 404, error: 'Not found'});
            return;
        }
        res.send(data[0]);
    }

    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;

            const result = await IdeaProyectoModel.reemplazar(id, updatedData);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Updated successfully'});
            }
        } catch (error) {
            res.status(400).send({ errno: 400, error: 'Bad Request'});
        }
    }

    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await IdeaProyectoModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update'});
            }
        } catch (error) {
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = IdeaProyectoController;