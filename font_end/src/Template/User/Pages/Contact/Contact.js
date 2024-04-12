import './Contact.css';
import logo from '../../../../img/logo.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import JSAlert from 'js-alert';
import successIcon from '../../../../img/success.png';
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_9gvkb4m', 'template_67o45rn', form.current, {
                publicKey: '-tq_5Oj9muzEgGBle',
            })
            .then(
                () => {
                    console.log();
                    JSAlert.alert("Bạn đã gửi mail thành công .", "Thành công", successIcon).dismissIn(2000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='contact_page'>
            <div className="title_login pt-5">
                <h2>Liên Hệ</h2>
                <div className='link_cumb'>
                    <a href='#'>Home</a>
                    <p><i class="fa-solid fa-chevron-right"></i></p>
                    <p className='text_title_login'>Liên Hệ</p>
                </div>
            </div>
            <div className='contact_main'>
                <div className='form_contact'>
                    <img src={logo}></img>
                    <div className='item_contact'>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Quận Ba Đình, Hà Nội</p>
                    </div>
                    <div className='item_contact'>
                        <i class="fa-solid fa-mobile-screen"></i>
                        <p>1900 1560</p>
                    </div>
                    <div className='item_contact'>
                        <i class="fa-regular fa-envelope"></i>
                        <p>support@contact.com</p>
                    </div>
                    <hr />
                    <p><strong>Liên hệ với chúng tôi</strong></p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div >
                            <div className='name_form'>
                                <input placeholder='Name' name="user_name"></input>
                            </div>
                            <div className='mail_form'>
                                <input placeholder='Email' type='email' name="user_email"></input>
                            </div>
                            <div className='main_form'>
                                <textarea placeholder='Nội dung' rows="6" cols="50" name="message" ></textarea>
                            </div>
                            <div className='submit_feedback'>
                                <button type='submit' value="Send">Gửi liên hệ</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='location_contact'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9042745860847!2d105.81330277508108!3d21.03651588061478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2bddedd8ff%3A0xde7c4fb8e272fabc!2zQ8O0bmcgdHkgQVZBIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1704362760828!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div >

    );
}

export default Contact;