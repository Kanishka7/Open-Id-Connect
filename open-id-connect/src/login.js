var routes= require('../src/routes');
var server = routes.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://localhost:%s", host, port)
});

