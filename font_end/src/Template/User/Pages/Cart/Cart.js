import React, { useEffect, useState } from 'react';
import './Cart.css';
import CartService from '../../../../Service/CartService';
import JSAlert from 'js-alert';
import successIcon from '../../../../img/success.png';

function Cart() {
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        CartService.getAllCart()
            .then((data) => {
                setCart(data.map(item => ({
                    ...item,
                    product: {
                        ...item.product,
                        quantity: item.quantity || 1
                    }
                })));
            })
            .catch((error) => {
                console.error('Error fetching cart data:', error);
            });
    }, []);
    const increaseQuantity = (index) => {
        const newCart = [...cart];
        newCart[index].product.quantity += 1;
        setCart(newCart); // Update the cart state
        updateCart(newCart[index].id, newCart[index].product.quantity);
    };
    const decreaseQuantity = (index) => {
        const newCart = [...cart];
        if (newCart[index].product.quantity > 1) {
            newCart[index].product.quantity -= 1;
            setCart(newCart);
            updateCart(newCart[index].id, newCart[index].product.quantity);
        }
    };
    const updateCart = (cartId, quantity) => {
        CartService.UpdateProductInCart(cartId, quantity)
            .then((response) => {
                console.log("Cart updated successfully:", response.data);
            })
            .catch((error) => {
                console.error("Error updating cart:", error);
            });
    };


    const calculateTotal = () => {
        return cart.reduce((acc, curr) => acc + (curr.product.price * curr.product.quantity), 0).toFixed(2);
    };

    const handleDeleteClick = (id) => {
        setLoading(true);
        CartService.deleteCart(id)
            .then((response) => {
                if (response) {
                    console.log("Product deleted successfully:", response.data);
                    JSAlert.alert("Sản phẩm đã được xóa khỏi giỏ hàng ", "Thành công", successIcon).dismissIn(1500);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                } else {
                    console.error("Response is undefined or null");
                }
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <div className="title_login pt-5">
                <h2>Giỏ Hàng</h2>
                <div className='link_cumb'>
                    <a href='#'>Home</a>
                    <p><i className="fa-solid fa-chevron-right"></i></p>
                    <p className='text_title_login'>Giỏ Hàng</p>
                </div>
            </div>
            <div className="cart_page">
                <div className='row'>
                    <div className='col-lg-7'>
                        <h6>Giỏ hàng của bạn ({cart.length} sản phẩm)</h6>
                        <hr />
                        {cart.map((item, index) => (
                            <div key={index} className='profile_product row'>
                                <div className='col-lg-3'>
                                    <div className='img_cart'>
                                        <img src={item.product.images} alt={item.product.name} />
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className='name_cart'>
                                        <p>{item.product.product_name}</p>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='quantity_cart'>
                                        <button onClick={() => decreaseQuantity(index)} className='how_quantity'>-</button>
                                        <p className='text_quantity'>{item.product.quantity}</p>
                                        <button onClick={() => increaseQuantity(index)} className='how_quantity'>+</button>
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className='price_cart'>
                                        <p>{new Intl.NumberFormat('vn-VN').format(item.product.price)} đ</p>
                                    </div>
                                </div>
                                <div className='col-lg-1'>
                                    <div className='delete_cart'>
                                        <p onClick={() => handleDeleteClick(item.id)} disabled={loading}>
                                            <i className="fa-regular fa-trash-can"></i>
                                        </p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                    <div className='col-lg-5'>
                        <h6>Thành tiền</h6>
                        <hr />
                        <div className='total'>
                            <p>Tổng cộng:</p>
                            <p>{new Intl.NumberFormat('vn-VN').format(calculateTotal())} đ</p>
                        </div>
                        <div className='button_checkout'>
                            <button>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
