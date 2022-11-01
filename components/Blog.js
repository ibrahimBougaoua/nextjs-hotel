/* eslint-disable react/no-unescaped-entities */
import styles from '../styles/Navbar.module.css';
import Image from 'next/image'

function Blog()
{
    return (
        <div className="blog-main-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="blog-cont">
                            <h3><a href="javascript:;">Why Choose Us ?</a></h3>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, rem a quis bibendum auctor,
                                nisi elit consequat ipsum, nec sagittis sem nibh id elit. Dssed odio sit amet nibh vulputate
                                cursus a sit amt mauris. Morbi accumsan ipsum velit.</p>
                            <p>This is Photoshop's version of Lorem Ipsum. Proin gravida n vel velit auctor aliquet. Aenean
                                sollicitudin, lorem quis bibendum tor. This is Photoshop's version of Lorem Ipsum</p>
                            <button type="button" className="btn btn-primary">Read more</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="sb-blog-wrapper">
                            <h4><a href="javascript:;">Top Reviews</a></h4>
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="review-slider">
                                        <p><a href="javascript:;"> <span className="clr-text"><i
                                                        className="fas fa-map-marker-alt"></i>
                                                    Republic of Cuba,
                                                    USA </span></a> &nbsp; &nbsp;
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i>
                                            <i className="far fa-star"></i><i className="far fa-star"></i>
                                        </p>
                                        <div className="blog-slider-cont">
                                            <Image src="images/team.jpg" alt="" />
                                            <p>“ Nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate rsus a
                                                sit amet mauris. Morbi san ips velit. Namec tellus a odio ti odio. ”
                                                <a href="">~ Akshay Handge ~</a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="item">
                                    <div className="review-slider">
                                        <p> <span className="clr-text"><i className="fas fa-map-marker-alt"></i>
                                                Republic of Cuba,
                                                USA </span> &nbsp; &nbsp;
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i>
                                            <i className="far fa-star"></i><i className="far fa-star"></i>
                                        </p>
                                        <div className="blog-slider-cont">
                                            <Image src="images/team.jpg" alt="" />
                                            <p>“ Nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate rsus a
                                                sit amet mauris. Morbi san ips velit. Namec tellus a odio ti odio. ”
                                                <a href="">~ Ajay S. ~</a>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="item">
                                    <div className="review-slider">
                                        <p> <span className="clr-text"><i className="fas fa-map-marker-alt"></i>
                                                Republic of Cuba,
                                                USA </span> &nbsp; &nbsp;
                                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i
                                                className="fas fa-star"></i>
                                            <i className="far fa-star"></i><i className="far fa-star"></i>
                                        </p>
                                        <div className="blog-slider-cont">
                                            <Image src="images/team.jpg" alt="" />
                                            <p>“ Nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate rsus a
                                                sit amet mauris. Morbi san ips velit. Namec tellus a odio ti odio. ”
                                                <a href="">~ Arun S. ~</a>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog