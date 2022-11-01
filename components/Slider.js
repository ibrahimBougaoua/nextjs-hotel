import styles from '../styles/Navbar.module.css';
import Image from 'next/image'

function Slider()
{
    return (
        <div className="slider-wrapper slider1-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <h4><a href="javascript:;">Most Popular Hotels</a></h4>
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <div className="sub-main">
                                    <div className="img-sec p-rel">
                                        <div className="hover-img p-rel">
                                            <a href="javascript:;"> <Image src="images/blog-1.jpg" alt="" /></a>
                                        </div>
                                        <span>$77 / Night</span>
                                    </div>
                                    <div className="slider-content">
                                        <span>
                                            <a href="javascript:;"> <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                    className="fas fa-star"></i>
                                                <i className="far fa-star"></i><i className="far fa-star"></i> &nbsp; | &nbsp; 88+
                                                Review</a>
                                        </span>
                                        <h5><a href="hotel-single-page.html">hotel sayaji indore</a></h5>
                                        <a href="javascript:;"> <span className="clr-text"><i className="fas fa-map-marker-alt"></i>
                                                Republic of Cuba,
                                                USA</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-sec p-rel">
                                    <div className="hover-img p-rel">
                                        <a href="javascript:;"> <Image src="images/blog-2.jpg" alt="" /></a>
                                    </div>
                                    <span>$50 / Night</span>
                                </div>
                                <div className="slider-content">
                                    <span>
                                        <a href="javascript:;"><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i>
                                            <i className="far fa-star"></i><i className="far fa-star"></i> &nbsp; | &nbsp; 83+
                                            Review</a>
                                    </span>
                                    <h5><a href="hotel-single-page.html">Guru kripa indore</a></h5>
                                    <a href="javascript:;"><span className="clr-text"><i className="fas fa-map-marker-alt"></i>
                                            Republic of Cuba,
                                            USA</span></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-sec p-rel">
                                    <div className="hover-img p-rel">

                                        <a href="javascript:;"> <Image src="images/blog-3.jpg" alt="" /></a>

                                    </div>
                                    <span>$72 / Night</span>
                                </div>
                                <div className="slider-content">
                                    <span>
                                        <a href="javascript:;"> <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i>
                                            <i className="far fa-star"></i><i className="far fa-star"></i> &nbsp; | &nbsp; 68+
                                            Review</a>
                                    </span>
                                    <h5><a href="hotel-single-page.html"> The Ashoka Hotel</a></h5>
                                    <a href="javascript:;"> <span className="clr-text"><i className="fas fa-map-marker-alt"></i>
                                            Republic of Cuba,
                                            USA</span></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-sec p-rel">
                                    <div className="hover-img p-rel">
                                        <a href="javascript:;"> <Image src="images/blog-1.jpg" alt="" /></a>
                                    </div>
                                    <span>$65 / Night</span>
                                </div>
                                <div className="slider-content">
                                    <span>
                                        <a href="javascript:;"> <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i>
                                            <i className="far fa-star"></i><i className="far fa-star"></i> &nbsp; | &nbsp; 48+
                                            Review</a>
                                    </span>
                                    <h5><a href="javascript:;"> Hotel New Sunder</a></h5>
                                    <a href="hotel-single-page.html"><span className="clr-text"><i
                                                className="fas fa-map-marker-alt"></i>
                                            Republic of Cuba,
                                            USA</span></a>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-sec p-rel">
                                    <div className="hover-img p-rel">
                                        <a href="javascript:;"> <Image src="images/blog-2.jpg" alt="" /></a>
                                    </div>
                                    <span>$52 / Night</span>
                                </div>
                                <div className="slider-content">
                                    <span>
                                        <a href="javascript:;"> <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i>
                                            <i className="far fa-star"></i><i className="far fa-star"></i> &nbsp; | &nbsp; 58+
                                            Review</a>
                                    </span>
                                    <h5><a href="hotel-single-page.html">hotel sayaji indore</a></h5>
                                    <span className="clr-text"><i className="fas fa-map-marker-alt"></i> Republic of Cuba,
                                        USA</span>
                                </div>
                            </div>
                            <div className="item">
                                <div className="img-sec p-rel">
                                    <div className="hover-img p-rel">
                                        <a href="javascript:;"> <Image src="images/blog-3.jpg" alt="" /></a>
                                    </div>
                                    <span>$55 / Night</span>
                                </div>
                                <div className="slider-content">
                                    <span>
                                        <a href="javascript:;"> <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i>
                                            <i className="far fa-star"></i><i className="far fa-star"></i> &nbsp; | &nbsp; 88+
                                            Review</a>
                                    </span>
                                    <h5><a href="hotel-single-page.html">Hotel New Sunder</a></h5>
                                    <a href="javascript:;"> <span className="clr-text"><i className="fas fa-map-marker-alt"></i>
                                            Republic of Cuba,
                                            USA</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Slider