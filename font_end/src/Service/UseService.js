import axios from "axios";
const USER_API_BASE_URL = "http://localhost:8080/api/";
class UseService {
    createUser(userData) {
        return axios.post(USER_API_BASE_URL + "register", userData);
    }
    Login(email, password) {
        let data = JSON.stringify({
            "email": email,
            "password": password
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: USER_API_BASE_URL + 'login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        return axios.request(config)

    }
}
export default new UseService();