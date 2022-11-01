import styles from '../styles/Navbar.module.css';
import Image from 'next/image'

function Footer()
{
    return (
        <>
            <footer className="footer-main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="sb-footer-logo">
                                <a href="javascript:;" className="f-pd"><Image src="images/f-logo-.png" alt="" /></a>
                                <p>Travelers are always discoverers,<br/> esy those who travel by air. </p>
                                <ul className="footer-social-icon">
                                    <li><a href="javascript:;"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript:;"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="javascript:;"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="javascript:;"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                                <p><a href="javascript:;"><span><i className="fas fa-phone-alt"></i></span> &nbsp; Toll free <br/>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;808 111 9999</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-menu">
                                <h5><a href="javascript:;" className="f-pd">Our company</a></h5>
                                <ul>
                                    <li><i className="fas fa-caret-right"></i><a href="javascript:;">&nbsp; About</a></li>
                                    <li><i className="fas fa-caret-right"></i><a href="javascript:;"> &nbsp;Services</a></li>
                                    <li><i className="fas fa-caret-right"></i><a href="javascript:;">&nbsp; Terms</a></li>
                                    <li><i className="fas fa-caret-right"></i><a href="javascript:;">&nbsp; FAQ</a></li>
                                    <li><i className="fas fa-caret-right"></i><a href="contact-form.html">&nbsp; Contact us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
                            <div className="footer-feed">
                                <h5><a href="javascript:;" className="f-pd">Instagram feed</a></h5>
                                <div className="row gutter">

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                                        <a href="javascript:;" className="p-rel"><Image src="images/f-image-1.jpg" className="p-rel"
                                                alt="" />
                                            <span><i className="fab fa-instagram"></i></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                                        <a href="javascript:;" className="p-rel"><Image src="images/f-image-2.jpg" className="p-rel"
                                                alt="" />
                                            <span> <i className="fab fa-instagram"></i></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                                        <a href="javascript:;" className="p-rel"><Image src="images/f-image-3.jpg" className="p-rel"
                                                alt="" />
                                            <span> <i className="fab fa-instagram"></i></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                                        <a href="javascript:;" className="p-rel"><Image src="images/f-image-4.jpg" className="p-rel"
                                                alt="" />
                                            <span><i className="fab fa-instagram"></i></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                                        <a href="javascript:;" className="p-rel"><Image src="images/f-image-5.jpg" className="p-rel"
                                                alt="" />
                                            <span> <i className="fab fa-instagram"></i></span>
                                        </a>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-4 p-0">
                                        <a href="javascript:;" className="p-rel"><Image src="images/f-image-6.jpg" className="p-rel"
                                                alt="" />
                                            <span> <i className="fab fa-instagram"></i></span>
                                        </a>
                                    </div>
                                    <div className="col-12 col-md-12 col-sm-12 col-12">
                                        <a href="javascript:;" className="more-feed">view all</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-menu">
                                <h5><a href="javascript:;" className="f-pd">Download App</a></h5>
                                <p>Free App Download for best<br />
                                    Tour Experience</p>
                                <a href="javascript:;"><Image src="images/play-store.jpg" alt="" /></a>
                                <a href="javascript:;"><Image src="images/app-store-1.jpg" alt="" /></a>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer