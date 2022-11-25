let connection;

const handleUserInput = function (key) {
    // your code here
    if(key === 'w'){
        connection.write('MOVE: up');
        console.log('nice up')
    }
    if(key === 'a'){
        connection.write('MOVE: left');
        console.log('good left move')
    }
    if(key === 's'){
        connection.write('MOVE: down');
        console.log('go dooown')
    }
    if(key === 'd'){
        connection.write('MOVE: right');
        console.log('right right right')
    }
    if(key === '\u0003'){
        process.exit();
    }
    //send messages
    if (key === '1') {
        connection.write('Say: Hello');
      }
      if (key === '2') {
        connection.write('Say: ByeBye');
      }
      if (key === '3') {
        connection.write('Say: My turn');
      }
      if (key === '4') {
        connection.write('Say: gotcha!');
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