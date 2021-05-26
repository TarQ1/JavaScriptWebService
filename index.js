var express = require("express");
var myApp = express();
var port = 4000


// Initialize Hello Layers
var helloController = require("./controllers/helloController.js");
var helloRepository = require("./repositories/helloRepository.js");
var helloService = require("./services/helloService.js");



function initializeControllers() {
    let list = [];

    {
        let HelloRepository = new helloRepository();
        let HelloService = new helloService(HelloRepository);
        let HelloController = new helloController(HelloService);

        list.push(HelloController)
    }

    return list
}

var controllerList = initializeControllers();

myApp.get("/Hello_World/:lang", function (req, res) {
    console.log("[Hello_World] " + req.params.lang);
    res.send(controllerList[0].helloWorld(req.params.lang));
});

myApp.listen(port, function () {
    console.log("[Start-up] Serveur listening on port " + port);
});



