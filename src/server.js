var connect = require('connect');
var serveStatic = require('serve-static');
var fs = require('fs');

connect()
    .use(serveStatic(__dirname))
    .use((req, res, next) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
       if(err) throw err;

       res.setHeader('Content-Length', data.length);
       res.end(data);
    });
})
.listen(9000, function () {
    console.log('Server running on 9000...');
});