const { stdin } = require('process');
const connection = require('./client.js');

 

  const handleUserInput = function (key) {
    // your code here
    if(key === 'w'){
        conn.write('MOVE: up');
    }
    if(key === 'a'){
        conn.write('MOVE: left');
    }
    if(key === 's'){
        conn.write('MOVE: down')
    }
    if(key === 'd'){
        conn.write('MOVE: right')
    }
    if(key === '\u0003'){
        process.exit();
    }
  };

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    return stdin;
  };

  stdin.on("data", handleUserInput);

setupInput(stdin)
  
  