import { Link } from 'react-router-dom';
import './Register.css'
import { useState } from 'react';
import JSAlert from 'js-alert';
import successIcon from '../../../../img/success.png';
import failIcon from '../../../../img/cancel.png';
import UseService from '../../../../Service/UseService';
import { useNavigate } from 'react-router-dom';


function Register() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneNumerErr, setPhoneNumberErr] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const validateEmail = (input) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(input)) {
            setEmailError('email không đúng định dạng');
        } else {
            setEmailError('');
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = handleSubmit();
        if (isValid) {
            setLoading(true);
            const userData = {
                name,
                email,
                password,
                phoneNumber
            };
            UseService.createUser(userData)
                .then(response => {
                    JSAlert.alert("Đăng kí thành công. Bạn có thể đăng nhập ngay bây giờ.", "Thành công", successIcon);
                    console.log(response);
                    console.log(userData);
                    setTimeout(() => {
                        navigate('/login');
                    }, 2500);
                })

                .catch(error => {
                    let errorMessage = "Đã xảy ra lỗi. Vui lòng thử lại.";
                    if (error.response && error.response.data) {
                        errorMessage = error.response.data;
                    }
                    JSAlert.alert(errorMessage, "Không thể đăng kí", failIcon).dismissIn(2500);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    const handleSubmit = () => {
        setEmailError('');
        setPasswordError('');
        setNameError('');
        setPhoneNumberErr('')
        let isValid = true;
        if (!phoneNumber) {
            setPhoneNumberErr('Vui lòng nhập vào số điện thoại')
        }
        if (!email) {
            setEmailError('Vui lòng nhập vào Email');
            isValid = false;
        }
        if (!password) {
            setPasswordError('Vui lòng nhập vào mật khẩu');
            isValid = false;
        }
        if (!name) {
            setNameError('Vui lòng nhập vào tên');
            isValid = false;
        }

        return isValid;
    };

    return (
        <>
            <div className="login_page">
                <div className="title_login pt-5">
                    <h2>Đăng Kí</h2>
                    <div className='link_cumb'>
                        <a href='#'>Home</a>
                        <p><i className="fa-solid fa-chevron-right"></i></p>
                        <p className='text_title_login'>Đăng kí</p>
                    </div>
                </div>
                <div className='form_login'>
                    <form onSubmit={onSubmit}>
                        <h3 className='text-center'>ĐĂNG KÍ TÀI KHOẢN</h3>
                        <div className='media'>
                            <div className='face'>
                                <a href=''><i className="fa-brands fa-facebook-f"></i> facebook</a>
                            </div>
                            <div className='google'>
                                <a href=''><i className="fa-brands fa-google-plus-g"></i> google</a>
                            </div>
                        </div>
                        <div className='input_type'>
                            <input placeholder='Email'
                                type='email'
                                name='email'
                                value={email}
                                onChange={handleEmailChange}></input>
                            <div className='error-message'>{emailError}</div>
                        </div>
                        <div className='input_type'>
                            <input placeholder='Mật khẩu'
                                type='password'
                                name='password'
                                value={password}
                                onChange={handlePasswordChange}
                            ></input>
                            <div className='error-message'>{passwordError}</div>
                        </div>
                        <div className='input_type'>
                            <input placeholder='Tên'
                                type='text'
                                name='name'
                                value={name}
                                onChange={handleNameChange}></input>
                            <div className='error-message'>{nameError}</div>
                        </div>
                        <div className='input_type'>
                            <input placeholder='Số điện thoại'
                                type='text'
                                name='phoneNumber'
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}></input>
                            <div className='error-message'>{phoneNumerErr}</div>
                        </div>
                        <div className='button_type'>
                            <button type='submit'>Đăng Kí</button>
                        </div>
                    </form>
                    <div className='text_login'>
                        <p className='pr-2'>Bạn đã có tài khoản? vui lòng đăng nhập </p>
                        <Link to='/login' className='text_pass'> tại đây</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Register;
