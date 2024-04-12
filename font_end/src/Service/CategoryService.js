import axios from 'axios';
const CATEGORY_API_BASE_URL = "http://localhost:8080/api/categories";
class CategoryService {
    getAllCategory() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: CATEGORY_API_BASE_URL,
        }
        return axios.request(config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    createCategory(category) {
        return axios.post(CATEGORY_API_BASE_URL + "/create", category);
    }
    deleteCategory(id) {
        return axios.delete(CATEGORY_API_BASE_URL + "/delete/" + id);
    }
    detailCategory(id) {
        return axios.get(CATEGORY_API_BASE_URL + "/detail/" + id);
    }

}
export default new CategoryService();