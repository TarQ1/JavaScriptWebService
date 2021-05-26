class helloController {
    constructor(HelloService) {
        this.service = HelloService;
        console.log("[helloController] initialized with service " + this.service.toString());
        return this;
    }

    toString() {
        return "helloController";
    }

    helloWorld(lang) {
        return this.service.helloWorld(lang);
    }
}

module.exports = helloController
