const net = require ('net');


const connect = function () {
    const conn = net.createConnection ({
        host: '192.168.1.192',
        port: '50541',
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