const pwd = require('./pwd');
const cat = require('./cat');


process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd') {
    process.stdout.write(pwd());

  }

  if(cmd === 'ls'){
    require('./ls');
  }

  if(cmd.includes('cat')) {
    let paramAsArray = cmd.split(' ');
    process.stdout.write(cat(paramAsArray[1]));

  }

  else {
    process.stdout.write('You typed: ' + cmd);


  }

  process.stdout.write('\nprompt > ');
});
