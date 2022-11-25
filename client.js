const net = require ('net');
const { IP, PORT } = require('./constants');

const connect = function () {
    const conn = net.createConnection ({
        host: IP,
        port: PORT,
    });
    conn.on('connect', () => {
        console.log("Succesfully connected to game server!");
        conn.write("Name: Dan")
        conn.write('Move: up');
        conn.write('Move: down');
        conn.write('Move: left')
        conn.write('Move: right');
        

    });

    conn.setEncoding('utf8');

    conn.on('data', (data) => {
        console.log(data)
    });
    
    

    return conn;
};



// console.log('Connecting...');
// connect()

module.exports = connect