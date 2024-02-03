class Singleton {
    static instance = null;

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

    static getInstance() {
        if (Singleton.instance) return Singleton.instance;
        return new Singleton();
    }
}