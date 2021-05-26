class helloService {
    constructor(repository) {
        this.repository = repository;
        console.log("[helloService] initialized with repository " + this.repository.toString());
        return this;
    }

    toString() {
        return "helloService";
    }

    helloWorld(lang) {
        let res = this.repository.helloWorld(lang);
        return res;
    }
}

module.exports = helloService

