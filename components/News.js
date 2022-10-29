import styles from '../styles/Navbar.module.css';

function News()
{
    return (
        <div className="news-main-wrapper">
            <div className="container">
                <div className="row">
                    <div className="news-sec-heading">
                        <h3><a href="javascript:;">Articles & Expert News</a></h3>
                        <p>Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id
                            ullamcorper libero <br/> Vestibulum imperdiet nibh vel magna lacinia commodo ultricies,</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="sb-news-blog">
                            <div className="news-img">
                                <img src="images/news-blog-1.jpg" alt="" />
                            </div>
                            <div className="news-cont">
                                <a href="javascript:;"> <span><i className="far fa-calendar"></i> &nbsp; April 4, 2022
                                    </span></a>
                                <h5><a href="javascript:;">Costa Rica, Your Island Escape</a></h5>
                                <p>Proin gravida nibh vel velit auctor alt. Aenean sollicitudin, rem a quis bibe auctor,
                                    nisi elit consequat ipsum.</p>
                                <a href="javascript:;">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="sb-news-blog">
                            <div className="news-img">
                                <img src="images/news-blog-2.jpg" alt="" />
                            </div>
                            <div className="news-cont">
                                <a href="javascript:;"> <span><i className="far fa-calendar"></i> &nbsp; April 4, 2022
                                    </span></a>
                                <h5><a href="javascript:;">7 Best Sarnath Hotels </a></h5>
                                <p>Proin gravida nibh vel velit auctor alt. Aenean sollicitudin, rem a quis bibe auctor,
                                    nisi elit consequat ipsum.</p>
                                <a href="javascript:;">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="sb-news-blog">
                            <div className="news-img">
                                <img src="images/news-blog-3.jpg" alt="" />
                            </div>
                            <div className="news-cont">
                                <a href="javascript:;"> <span><i className="far fa-calendar"></i> &nbsp; April 4, 2022
                                    </span></a>
                                <h5><a href="javascript:;">Best Hotels Near 2022</a></h5>
                                <p>Proin gravida nibh vel velit auctor alt. Aenean sollicitudin, rem a quis bibe auctor,
                                    nisi elit consequat ipsum.</p>
                                <a href="javascript:;">read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="t-center">
                            <a href="blog-right-single.html" className="btn btn-primary">read our blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News