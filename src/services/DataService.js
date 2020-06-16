// Singleton class
let instance = null;

class DataService {

    constructor() {
        if (instance) {
            return instance
        } else {
            this.BASE_URL = "";
            instance = this;
        }
    }


}

export default DataService;