import './footer.css';

function Footer() {
    return (
        <footer>
                <div className="contact">
                    <h2 className="contact__gmail">SIGN UP FOR MONA EMAIL</h2>
                    <p className="contact__text">Be the first to know about the latest products, exclusives and offers from Mona</p>
                    <a href="" className="contact__signup">sign up</a>
                </div>
                <div className="info">
                    <div className="gridhd info__content grid wide">
                        <ul className="info__list">
                            <li className="info__item bold">
                                <ul>
                                    <li>FIND A STORE</li>
                                    <li>SIGN UP FOR EMAIL</li>
                                    <li>BECOME A MEMBER</li>
                                    <li>SITE FEEDBACK</li>
                                </ul>
                            </li>
                            <li className="info__item">
                                <ul>
                                    <li className="bold text-white">GET HELP</li>
                                    <li>Order Status</li>
                                    <li>Delivery</li>
                                    <li>Returns</li>
                                    <li>Payment Options</li>
                                    <li>Contact Us</li>
                                </ul>
                            </li>
                            <li className="info__item">
                                <ul>
                                    <li className="bold text-white">ABOUT MONA</li>
                                    <li>News</li>
                                    <li>Careers</li>
                                    <li>Investors</li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="social__list">
                            <li className="social__item"><i className="fab fa-facebook"></i></li>
                            <li className="social__item"><i className="fab fa-instagram-square"></i></li>
                            <li className="social__item"><i className="fab fa-twitter"></i></li>
                            <li className="social__item"><i className="fab fa-youtube"></i></li>
                        </ul>
                    </div>
                    <div className="grid_contain">
                        <p className="coppyright">© All rights reserved. Thiết kế website <a href="https://www.facebook.com/nhac1998/" target="_blank">PTN</a></p>
                    </div>
                </div>
            </footer>
    );

}
export default Footer;