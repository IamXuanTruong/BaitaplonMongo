import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ModelAddtoCart.css';
import successIcon from '../../../../img/success.png';
import ProductService from '../../../../Service/ProductService';
import JSAlert from 'js-alert';
import CartService from '../../../../Service/CartService';

function ModelAddtoCart({ showPopup, handleClose, id }) {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1); // Mặc định quantity là 1

    useEffect(() => {
        if (showPopup === true && id) {
            ProductService.detailProduct(id)
                .then((response) => {
                    setProduct(response.data);
                })
                .catch((error) => {
                    console.error("Lỗi khi lấy thông tin sản phẩm:", error);
                });
        }
    }, [id, showPopup]);

    const handleAddtocart = () => {
        setLoading(true);
        // Lấy giá trị số lượng từ input quantity
        const quantityValue = parseInt(quantity);

        CartService.addtoCart(product.id, quantityValue)
            .then((response) => {
                if (response) {
                    console.log("Product added successfully:", response.data);
                    JSAlert.alert("Sản phẩm đã được thêm vào giỏ hàng ", "Thành công", successIcon).dismissIn(1500);
                } else {
                    console.error("Response is undefined or null");
                }
            })
            .catch((error) => {
                console.error("Error adding product:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <div className='modal-addtocart' style={{ display: showPopup ? 'flex' : 'none' }}>
                <div className='AddtoCart '>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className="img-product">
                                <img src={product.images} alt="Product" />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='close-button'>
                                <button onClick={handleClose}><i className="fa-solid fa-xmark"></i></button>
                            </div>
                            <div className='product-infor'>
                                <h3 className='name-product'>{product.product_name}</h3>
                                <p className='sellprice'>{new Intl.NumberFormat('vn-VN').format(product.price)}<span>đ</span></p>
                                <div className='quantity-product'>
                                    <input
                                        pattern="[0-9]*"
                                        type="number"
                                        placeholder="Quantity"
                                        max={product.quantity}
                                        min="1"
                                        name="quantity"
                                        id="quantity"
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        required
                                    />
                                </div>

                                <p>Nguồn gốc : Việt Nam</p>
                                <p>Mô tả: {product.description}</p>
                                <div className='AddToCart'>
                                    <button type="button" className="btn btn-outline-success" onClick={handleAddtocart}>Add To Cart</button>
                                </div>
                                <Link to={`/detail/${product.id}`}>Xem chi tiết</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModelAddtoCart;
