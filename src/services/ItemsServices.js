import axios from "axios";

const INVENTORY_API_BASE_URL = "http://localhost:8080/api/v1/all-inventory-items";

const INVENTORY_ADD_API_BASE_URL = "http://localhost:8080/api/v1/add-inventory-item";

const INVENTORY_UPDATE_ITEM_API_BASE_URL = "http://localhost:8080/api/v1/update-item/";

class ItemsServices{

    getItems(){
        return axios.get(INVENTORY_API_BASE_URL);
    }

    createItem(item){
        return axios.post(INVENTORY_ADD_API_BASE_URL, item);
    }

    updateItem(id){
        return axios.put(INVENTORY_UPDATE_ITEM_API_BASE_URL, id);
    }
}

export default new ItemsServices()