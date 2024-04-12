import axios from "axios";
const CART_API_BASE_URL = "http://localhost:8080/api/cart";
class CartService {
    getAllCart() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: CART_API_BASE_URL,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        return axios.request(config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }
    addtoCart(product_id, quantity) {
        let data = JSON.stringify({
            "product_id": product_id,
            "quantity": quantity
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: CART_API_BASE_URL,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data // Thêm dữ liệu vào yêu cầu
        };

        return axios.request(config)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteCart(id) {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `${CART_API_BASE_URL}/${id}`,
            headers: {
                'Content-Type': 'application/json'
            },
        };
        return axios.request(config)
    }
    UpdateProductInCart(cartId, quantity) {
        let data = JSON.stringify({
            "quantity": quantity
        });
        let config = {
            method: 'put',
            url: `${CART_API_BASE_URL}/updateCart/${cartId}`, // Updated to use path variable
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        return axios.request(config);
    }

}
export default new CartService();