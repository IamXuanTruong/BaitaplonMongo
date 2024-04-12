import axios from 'axios';
const PRODUCT_API_BASE_URL = "http://localhost:8080/api/products";
class ProductService {
    getAllProduct() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: PRODUCT_API_BASE_URL,
        }
        return axios.request(config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    createProduct(product) {
        return axios.post(PRODUCT_API_BASE_URL + "/create", product);
    }
    deleteProduct(id) {
        return axios.delete(PRODUCT_API_BASE_URL + "/delete/" + id);
    }
    detailProduct(id) {
        return axios.get(PRODUCT_API_BASE_URL + "/detail/" + id);
    }
    searchProduct(query) {
        return axios.get(PRODUCT_API_BASE_URL + "/search", {
            params: {
                query: query,
            },
        });
    }
}
export default new ProductService();