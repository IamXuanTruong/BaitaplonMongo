import "./Header.css"
import logo from "../../../../img/logo.png"
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import avt from "../../../../img/unnamed.jpg";
import failIcon from '../../../../img/cancel.png';
import { useNavigate } from 'react-router-dom';

import ProductService from "../../../../Service/ProductService";
import JSAlert from "js-alert";

function Header() {
    const navigate = useNavigate(); // Correct way to initiate navigate
    const [productId, setProductId] = useState();
    const { id } = useParams();
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

    window.addEventListener('storage', () => {
        setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    });

    const Logout = () => {
        localStorage.setItem("isAuthenticated", "false");
        setIsAuthenticated(false);
    };

    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchInputChange = (event) => {
        const searchQuery = event.target.value;
        setQuery(searchQuery);
        if (searchQuery.trim() !== '') {
            ProductService.searchProduct(searchQuery)
                .then(response => {
                    setSearchResults(response.data);
                })
                .catch(error => {
                    console.error('Error searching products:', error);
                    setSearchResults([]);
                });
        } else {
            setSearchResults([]);
        }
    };

    const handleCartClick = () => {
        if (isAuthenticated) {
            navigate('/cart');
        } else {
            JSAlert.alert("Bạn cần đăng nhập trước khi vào giỏ hàng !", "Thất bại", failIcon).dismissIn(2000);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent form submission
        // Perform search if needed (optional, can be left empty if search is performed on input change)
    };
    return (
        <div className="header_page">
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="menu">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Trang chủ <span
                                        className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">Giới thiệu</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="/shop">Sản Phẩm</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " href="/contact">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="icon_menu">
                    <div className="search">
                        <form onSubmit={handleSearchSubmit}>
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm ..."
                                value={query}
                                onChange={handleSearchInputChange}
                            />

                        </form>
                        <div className="product_search">

                            {searchResults.length > 0 && (
                                <ul>
                                    {searchResults.map(product => (
                                        <div key={product.id} className="item_search">
                                            <Link to={`/detail/${product.id}`} key={product.id} className="link-to-detail">
                                                <div className="img_search">
                                                    <img src={product.images} className="card-img-top" alt="Product" />
                                                </div>
                                                <div className="name_search">
                                                    <h6>{product.product_name}</h6>
                                                    <h6>{new Intl.NumberFormat('vn-VN').format(product.price)} đ</h6>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {isAuthenticated ? (
                        <div className='user_icon'>
                            <img src={avt} className="img_default" alt="User Avatar" />
                            <div className="user_dropdown">
                                <Link to="/profile">Profile</Link>
                                <Link onClick={Logout}>Logout</Link>
                            </div>
                        </div>
                    ) : (
                        <div className='user_icon1'>
                            <Link to="/login">
                                <i className="fas fa-user-plus"></i>
                            </Link>
                        </div>
                    )}
                    <div className="cart">
                        <div className="cart">
                            <button className="notification" onClick={handleCartClick}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;
