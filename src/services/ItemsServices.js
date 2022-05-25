import axios from "axios";

const INVENTORY_API_BASE_URL = "http://localhost:8080/api/v1/all-inventory-items";

class ItemsServices{

    getItems(){
        return axios.get(INVENTORY_API_BASE_URL);
    }

}

export default new ItemsServices()