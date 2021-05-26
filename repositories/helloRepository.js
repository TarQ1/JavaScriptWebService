class helloRepository {
    constructor() {
        console.log("[helloRepository] initialized");
        return this;
    }

    toString() {
        return "helloRepository";
    }
    helloWorld(lang) {
        console.log("[helloWorld] input language is " + lang);
        switch (lang) {
            case ("FR"): return "Bonjour Le Monde";
            case ("EN"): return "Hello World";
            case ("ES"): return "Hola Mundo";
            default: return "Hello World";
        }
    }
}

module.exports = helloRepository
