import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Detail.css';
import ProductService from "../../../../Service/ProductService";
function Detail() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    useEffect(() => {
        ProductService.detailProduct(id)
            .then((response) => {
                setProduct(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <>
            <div className="page_detail">
                <div className="title_login pt-5">
                    <h2>Chi tiết sản phẩm</h2>
                    <div className='link_cumb'>
                        <a href='#'>Home</a>
                        <p><i class="fa-solid fa-chevron-right"></i></p>
                        <p className='text_title_login'>Sản phẩm</p>
                    </div>
                </div>
                <div className="content_detail">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="img_detail">
                                <img src={product.images}></img>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="name_detail">
                                <h4>{product.product_name}</h4>
                                <p>Thương hiệu: WinMart</p>
                                <h3>{new Intl.NumberFormat('vn-VN').format(product.price)} đ</h3>
                                <p>Nguồn gốc : Việt Nam</p>
                                <p>Khối lượng :1kg/ hộp</p>
                                <p>{product.description}</p>
                                <hr />
                                <div className="quantity_detail">
                                    <div className='quantity'>
                                        <strong className="pt-2">Số lượng: </strong>
                                        <button onClick={decreaseQuantity} className='item_but'>-</button>
                                        <p className="number_quantity">{quantity}</p>
                                        <button onClick={increaseQuantity} className='item_but'>+</button>
                                    </div>
                                    <div>
                                        <p className="pt-2">{product.quantity} sản phẩm có sẵn</p>
                                    </div>
                                </div>
                                <div className="add_to_cart_detail">
                                    <button className="add_to_cart" onClick="addToCart()">Cho vào giỏ hàng</button>
                                    <button className="buy_now">Mua ngay</button>
                                </div>

                            </div>
                            <p className="pt-3">Gọi đặt mua: <a href="#" className="call">19006750</a> để nhanh chóng đặt hàng</p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
} export default Detail;