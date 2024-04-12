import { useEffect, useState } from 'react';
import './Profile.css';
import avt from '../../../../img/unnamed.jpg'
function Profile() {


    return (
        <>
            <div className="title_login pt-5">
                <h2>Thông tin cá nhân</h2>
                <div className='link_cumb'>
                    <a href='#'>Home</a>
                    <p><i className="fa-solid fa-chevron-right"></i></p>
                    <p className='text_title_login'>Profile</p>
                </div>
            </div>
            <div className='profile_page'>
                <div className='image_profile'>
                    <div className='item_image'>
                        <img src={avt}></img>
                    </div>
                    <div className='item_active'>
                        <i class="fa-solid fa-pen-to-square"></i>
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <div className='item_name'>
                        <h6>Xuân Trường</h6>
                    </div>
                    <div className='item_name'>
                        <h6>Contact</h6>
                    </div>
                    <div className='item_name'>
                        <h6>Support</h6>
                    </div>
                    <div className='item_name'>
                        <h6>Setting</h6>
                    </div>
                    <div className='item_name'>
                        <h6>Signout</h6>
                    </div>
                </div>
                <div className='form_profile'>
                    <h5>Thông tin cá nhân</h5>
                    <div className='item_profile'>
                        <h6>Họ và tên :</h6>
                        <p>Vũ Xuân Trường</p>
                    </div>
                    <div className='item_profile'>
                        <h6>Email :</h6>
                        <p>truongept2003@gmail.com</p>
                    </div>
                    <div className='item_profile'>
                        <h6>Phone :</h6>
                        <p>0397186546</p>
                    </div>
                    <div className='item_profile'>
                        <h6>Địa Chỉ :</h6>
                        <p>Hà Nội</p>
                    </div>
                    <div className='item_profile'>
                        <h6>Đánh giá:</h6>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Profile;