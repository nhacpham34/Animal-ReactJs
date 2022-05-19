import './login.css'

import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
function Login() {
    let history = useNavigate();
    const [userName, setUserName] = useState("dhggy@gmail.com");
    const [password, setPassword] = useState("sdjfks345");
    let login = () => {
        if(userName !='dhggy@gmail.com' && password !='sdjfks345' && ValidateEmail(userName) && ValidatePassword(password)) {
            localStorage.setItem("accessToken", true);
            localStorage.setItem("nameToken", userName);
            history("/admin", {replace: true})
        }
        
    }
    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
            return (true)
        }else {
            return (false)
            }
        }
    function ValidatePassword(password) {
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)){
            return (true)
        }else {
            return (false)
            }
        }
    return (
        <div className="login">
<div id="wrapper">
            <form action="" id="form-login">
                <h1 class="form-heading">Đăng nhập</h1>
                <div class="form-group">
                    <i class="far fa-user"></i>
                    <input type="email" class="form-input" onChange={(e) => { setUserName(e.target.value)}} placeholder="Email của bạn" />
                    
                </div>
                {ValidateEmail(userName) ? null : <p className="message">Vui lòng nhập đúng định dạng email!</p>}
                <div class="form-group">
                    <i class="fas fa-key"></i>
                    <input type="password" onChange={(e) => { setPassword(e.target.value)}} class="form-input" placeholder="Mật khẩu" />
                    <div id="eye">
                        <i class="far fa-eye"></i>
                    </div>
                </div>
                {ValidatePassword(password) ? null : <p className="message">Mật khẩu ít nhất 8 kí tự gồm chữ và số!</p>}
                <input onClick={login} type="button" value="Đăng nhập" class="form-submit" />
            </form>
        </div>
        </div>
        
    );
}
export default Login;