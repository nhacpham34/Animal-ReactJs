import './header.css';
import imageLogo from '../image/logo-mona.png'
import { useNavigate } from "react-router-dom";
function Header()
{
    let history = useNavigate();
    let logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("nameToken");
        history('/', {replace: true})
    }
    let myInfo = () => {
        history('/myinfo', {replace: true})
    }

    let showListNavbar = () => {

    }


    return(
        <div className="header">
            <div className="header-top grid wide">
                <p className="header-top__slogan">you nice sologan...</p>
                <div className="header-top__item">
                    <p className="header-top-sectors">Xin chào Quản lý!</p>
                    <div className="header-top-detail">
                        <ul className="header-top-detail__list">
                            <li className="header-top-detail__item">
                                    <button onClick={myInfo} className="header-top__logout">
                                        <i class="fas fa-user"></i>
                                        <span> Thông tin cá nhân</span>
                                    </button>
                            </li>
                            <li className="header-top-detail__item">
                                <button onClick={logout} className="header-top__logout">
                                    <i className="fas fa-sign-in-alt"></i> 
                                    <span> Đăng xuất</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </div>
            <nav className="header-body grid wide">
                <ul className="navbar__list">
                    <img className="navbar__img" src={imageLogo}></img>
                    
                    <li className="navbar__item">
                        <button onClick={showListNavbar} className="navbar__btn">
                            <i class="fas fa-bars"></i>
                        </button>
                        
                        <ul className="navbar__item-list">
                            <li className="navbar__item-sectors">
                                <a className="navbar__item-link" href="/">VỀ CHÚNG TÔI</a>
                            </li>
                            <li className="navbar__item-sectors">
                                <a className="navbar__item-link" href="#shop-boys">ĐỘNG VẬT HOANG DÃ</a>
                            </li>
                            <li className="navbar__item-sectors">
                                <a className="navbar__item-link" href="#shop-boys">TIN TỨC</a>
                            </li>
                            <li className="navbar__item-sectors"><a className="navbar__item-link" href="#shop-boys">TÀI LIỆU</a></li>
                        </ul>
                    </li>
                    <li className="navbar__item">
                        <div className="search">
                            <input className="search-input" type="text" placeholder="Search" />
                            <button className="btn search-input"><i className="fas fa-search"></i></button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default Header;