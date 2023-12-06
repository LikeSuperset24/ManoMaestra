const { connectMysql } = require('../dbconnection');
class IdeaProyectoModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('ideas_proyecto');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('ideas_proyecto').where('id_idea', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('ideas_proyecto').insert(datos).returning('id_idea');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('ideas_proyecto').where('id_idea', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_idea'] = id;
        await db.where('id_idea', id).del();
        await db.insert(newData).into('ideas_proyecto');
        return id;
    }
}

module.exports = IdeaProyectoModel;