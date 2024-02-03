Array.prototype.groupBy = function(keyword) {
    console.log("Keyword: ", keyword);
    const grouppedArr = {};
    
    for (let i = 0; i < this.length; i++) {
        const key = this[i][keyword];

        if (grouppedArr[key]) grouppedArr[key].push(this[i]);
        else grouppedArr[key] = [this[i]];
    }

    return grouppedArr;
}

const URL = "https://jsonplaceholder.typicode.com/posts";

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

    async #fetchData(url) {
        try {
            const response = await fetch(url);

            if (response.statusText !== "OK") {
                throw new Error("Bad request!");
            }

            const data = await response.json();

            return data;
        } catch(err) {
            console.error(err.message);
        }
    }

    async getData(url) {
        const data = await this.#fetchData(url);
        console.log("Data: ", data);

        return data;
    }

    groupByUserID(data) {
        return data.groupBy("userId");
    }

    getGrouppedData(data, keyword) {
        return data.groupBy(keyword);
    }

    async checkMethod(url) {
        const data = await this.#fetchData(url);
        console.log("----------------------------")
        console.log("Data:")
        console.log(data);

        const byUserId = this.groupByUserID(data);
        console.log("----------------------------");
        console.log("By user id:")
        console.log(byUserId);

        const byKeyword = this.getGrouppedData(data, "userId");
        console.log("----------------------------");
        console.log("By keyword:")
        console.log(byKeyword);
    }
}

const instance = new Singleton();
instance.checkMethod(URL);