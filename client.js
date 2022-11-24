const net = require ('net');

const connect = function () {
    const conn = net.createConnection ({
        host: '165.227.47.243',
        port: 50541,
    });
    conn.on('connect', () => {
        console.log("Succesfully connected to game server!")
    });

    conn.setEncoding('utf8');

    conn.on('data', (data) => {
        console.log(data)
    })
    conn.on('adata', (data) => {
        conn.write("Name: Dan")
    })

    return conn;
};
console.log('Connecting...');
connect()

module.exports = connect