import { useEffect, useState } from 'react';
import './ListProduct.css';
import { Link, useParams } from 'react-router-dom';
import CategoryService from '../../../../Service/CategoryService';
import ProductService from '../../../../Service/ProductService';
import ModelAddtoCart from '../../Layouts/MasterLayout';
import CartService from '../../../../Service/CartService';
import successIcon from '../../../../img/success.png';
import JSAlert from 'js-alert';
function ListProduct() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        ProductService.getAllProduct()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
        CategoryService.getAllCategory()
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    const handleAddtocart = (id) => {
        setLoading(true);
        CartService.addtoCart(id)
            .then((response) => {
                if (response) {
                    console.log("Product deleted successfully:", response.data);
                    JSAlert.alert("Sản phẩm đã được thêm vào giỏ hàng ", "Thành công", successIcon).dismissIn(1500);
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
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const [showPopup, setShowPopup] = useState(false);
    const [productId, setProduct_id] = useState();

    const openModal = (productId) => {
        setShowPopup(true);
        setProduct_id(productId);
    }

    const closeModal = () => {
        setShowPopup(false);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <div className="list">
                <div className="title_login pt-5">
                    <h2>Tất cả sản phẩm</h2>
                    <div className='link_cumb'>
                        <a href='#'>Home</a>
                        <p><i className="fa-solid fa-chevron-right"></i></p>
                        <p className='text_title_login'>Sản phẩm</p>
                    </div>
                </div>
                <div className="listproduct">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="soft">
                                <h5>Danh mục sản phẩm</h5>
                                {categories && categories.length > 0 && categories.map((category) => (
                                    <li key={category.category_id}>
                                        <input type='checkbox' id={category.category_name} />
                                        <label htmlFor={category.category_name} className='m-2'>{category.category_name}</label>
                                    </li>
                                ))}

                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className='row'>
                                {currentProducts.map((product) => (
                                    <div className='col-lg-3' key={product.id}>
                                        <div className="card m-2">
                                            <Link to={`/detail/${product.id}`} key={product.id}>
                                                <img src={product.images} className="card-img-top" alt="Product" />
                                            </Link>
                                            <div className="card-body">
                                                <Link to={`/detail/${product.id}`} key={product.id}>
                                                    <h6 className="card-title">{product.product_name}</h6>
                                                </Link>
                                                <h6 className="card-text">{new Intl.NumberFormat('vn-VN').format(product.price)} đ</h6>
                                            </div>
                                            <div className='active_product'>
                                                <div className='active_cart'>
                                                    <button onClick={() => openModal(product.id)}>
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>

                                                </div>
                                                <div className='active_cart'>
                                                    <button type="button" className="btn btn-outline-success" onClick={() => handleAddtocart(product.id)}><i class="fa-solid fa-cart-shopping"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <ModelAddtoCart showPopup={showPopup} handleClose={closeModal} id={productId} />
                                    </div>
                                ))}
                            </div>
                            <div className='pagination'>
                                {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
                                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )

}
export default ListProduct;