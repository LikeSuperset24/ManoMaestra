const { connectMysql } = require('../dbconnection');
class TipoUsuarioModel
{
    static async consultar() {
        let db = await connectMysql();
        let query = db('tipo_usuario');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('tipo_usuario').where('id_tipo_usuario', id);
    }
}

module.exports = TipoUsuarioModel;