const { connectMysql } = require('../dbconnection');
class ReseñasModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('reseñas');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('reseñas').where('id_reseña', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('reseñas').insert(datos).returning('id_reseña');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('reseñas').where('id_reseña', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_reseña'] = id;
        await db.where('id_reseña', id).del();
        await db.insert(newData).into('reseñas');
        return id;
    }
}

module.exports = ReseñasModel;