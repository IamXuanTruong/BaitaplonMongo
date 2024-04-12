import './Footer.css';
import logo from '../../../../img/logo.png'

function Footer() {
    return (
        <>
            <div className="active_email">
                <div className="footer_active">
                    <div className="active">
                        <h3>
                            Đăng kí nhận tin khuyến mãi
                        </h3>
                    </div>
                    <div className="send_mail">
                        <input></input>
                        <div className="button_send">
                            <button>Đăng kí</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_page">
                <div className="footer">
                    <div className="context1">
                        <div class="logo_ft">
                            <img src={logo} />
                        </div>
                        <div className="context_item">
                            <i class="fa-solid fa-location-dot"></i>
                            <p>Toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Quận Ba Đình, Hà Nội</p>
                        </div>
                        <div className="context_item">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                            <p>1900 1560</p>
                        </div>
                        <div className="context_item">
                            <i class="fa-solid fa-envelope"></i>
                            <p>support@contact.com</p>
                        </div>
                    </div>
                    <div className="context"></div>
                    <div className="context2">
                        <div className="row">
                            <div className="col-lg-4">
                                <h6>
                                    CẢM NANG SỬ DỤNG
                                </h6>
                                <div className="item_ft">
                                    <a href="">
                                        Trang chủ
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Giới thiệu
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Sản phẩm
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Tin Tức
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Liên hệ
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h6>
                                    CHÍNH SÁCH
                                </h6>
                                <div className="item_ft">
                                    <a href="">
                                        Trang chủ
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Giới thiệu
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Sản phẩm
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Tin Tức
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Liên hệ
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <h6>
                                    DỊCH VỤ
                                </h6>
                                <div className="item_ft">
                                    <a href="">
                                        Trang chủ
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Giới thiệu
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Sản phẩm
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Tin Tức
                                    </a>
                                </div>
                                <div className="item_ft">
                                    <a href="">
                                        Liên hệ
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;