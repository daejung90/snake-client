const net = require ('net');
const { stdin } = require('process');

const connect = function () {
    const conn = net.createConnection ({
        host: '192.168.1.192',
        port: '50541',
    });
    conn.on('connect', () => {
        console.log("Succesfully connected to game server!");
        conn.write("Name: Dan")
        conn.setInterval(() => {
            conn.write("Move: up");
        }, 2000);
        conn.setInterval(() => {
            conn.write('Move: down');
        }, 3000);
        conn.setInterval(() => {
            conn.write('Move: left');
        }, 4000);
        conn.setInterval(() => {
            conn.write('Move: right');
        }, 5000)
        // conn.write('Move: up');
        // conn.write('Move: down');
        // conn.write('Move: left')
        // conn.write('Move: right');
        // }

    });

    conn.setEncoding('utf8');

    conn.on('data', (data) => {
        console.log(data)
    });
    
    

    return conn;
};

const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };



console.log('Connecting...');
connect()

module.exports = connect