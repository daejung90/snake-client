let connection;

const handleUserInput = function (key) {
    // your code here
    if(key === 'w'){
        connection.write('MOVE: up');
    }
    if(key === 'a'){
        connection.write('MOVE: left');
    }
    if(key === 's'){
        connection.write('MOVE: down')
    }
    if(key === 'd'){
        connection.write('MOVE: right')
    }
    if(key === '\u0003'){
        process.exit();
    }
  };

  const setupInput = function (conn) {
    connection = conn
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };

  

  module.exports = setupInput;