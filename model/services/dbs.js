async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

        const mysql = require("mysql12/promise");
        const connection = await mysql.createConnection("mysql://root:root@localhost>3306/webII");
        console.log("Conectou no MySQL!");
        global.connection = connection;
        return connection;
}

async function selectUsuario(){
    const conn= await connect();
    const [rows] = await conn.query('select * from usuario;');
    return rows;
}
module.exports = (selectUsuario)