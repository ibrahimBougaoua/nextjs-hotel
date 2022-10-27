function MobileMenuMain()
{
    return (
        <div id="sidebar">
            <div className="sidebar_logo">
                <a href="index-01.html">
                    <img src="images/logo.png" alt="" />
                </a>
            </div>
            <div id='cssmenu'>
                <div className="input-group ms-3">
                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
                    <input type="text" className="form-control" placeholder="search here..." aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <ul>
                    <li className='has-sub'><a href="index.html">Home</a>
                        <ul>
                            <li><a href="index-01.html">Home 01</a></li>
                            <li><a href="index-02.html">Home 02</a></li>
                        </ul>
                    </li>
                    <li className='has-sub'><a href="javascript:;">Hotel</a>
                        <ul>
                            <li className='has-sub'><a href="javascript:;" className="sub-icon">Hotel Listing</a>
                                <ul className="m-sub-dropdown">
                                    <li><a href="listing-grid-left.html">Hotel Left Grid View </a>
                                    </li>
                                    <li><a href="listing-grid-right.html">Hotel right Grid View </a>
                                    </li>
                                    <li><a href="grid-map-view.html">Hotel Map View</a>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="hotel-single-page.html">Hotel Single Page</a>
                            </li>
                            <li><a href="404-style.html">404</a>
                            </li>
                        </ul>
                    </li>
                    <li className='has-sub'><a href="javascript:;">Shortcode</a>
                        <ul>
                            <li><a href="accordion.html">Accordion</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="client.html">Client</a></li>
                            <li><a href="counter.html">Counter</a></li>
                            <li><a href="element.html">Element</a></li>
                            <li><a href="feature_with_icon.html">Feature with icon</a></li>
                            <li><a href="feature_with_images.html">Feature with images</a></li>
                            <li><a href="footer.html">Footer</a></li>
                            <li><a href="form.html">Form</a></li>
                            <li><a href="heading.html">Heading</a></li>
                            <li><a href="image_box.html">Image Box</a></li>
                            <li><a href="icon.html">Icon</a></li>
                            <li><a href="page-header.html">Page Header</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="pricing-table.html">Pricing Table</a></li>
                            <li><a href="progress-skills.html">Progress Bar</a></li>
                            <li><a href="tab.html">Tab</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="testimonials.html">testimonials</a></li>
                        </ul>
                    </li>
                    <li className='has-sub'><a href="javascript:;">Blog</a>
                        <ul>
                            <li className='has-sub'><a href="#" className="sub-icon">Blog Single</a>
                                <ul className="m-sub-dropdown">
                                    <li><a href="blog-left-singal.html">Single Left Sidebar</a>
                                    </li>
                                    <li><a href="blog-right-single.html">Single Right Sidebar</a>
                                    </li>
                                </ul>
                            </li>
                            <li className='has-sub'><a href="#" className="sub-icon">Blog Categories</a>
                                <ul className="m-sub-dropdown">
                                    <li><a href="blog-categories-left.html">Blog Left Sidebar</a>
                                    </li>
                                    <li><a href="blog-categories-right.html">Blog Right Sidebar</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="contact-form.html">Contact</a></li>
                    <li className="m-social-icons">
                        <span><i className="fab fa-facebook-f"></i></span>
                        <span><i className="fab fa-twitter"></i></span>
                        <span><i className="fab fa-linkedin-in"></i></span>
                        <span><i className="fab fa-instagram"></i></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MobileMenuMain