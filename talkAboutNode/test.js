var fs = require('fs');

fs.readFile('test.js', function (err, data) {
    console.log(data.toString());
});

console.log("Fim do script!");

