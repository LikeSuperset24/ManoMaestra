const { connectMysql } = require('../dbconnection');
class TrabajosModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('trabajos');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('trabajos').where('id_trabajo', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('trabajos').insert(datos).returning('id_trabajo');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('trabajos').where('id_trabajo', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['id_trabajo'] = id;
        await db.where('id_trabajo', id).del();
        await db.insert(newData).into('trabajos');
        return id;
    }
}

module.exports = TrabajosModel;