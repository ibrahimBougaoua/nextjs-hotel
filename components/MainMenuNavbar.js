function MainMenuNavbar()
{
    return (
        
        <div className="main_menu_navbar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-4 col-lg-2 col-6">
                        <a className="navbar-brand" href="index-01.html">
                            <img src="images/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="col-xl-3 col-lg-2 col-6 d-block d-lg-none">
                        <div className="navbar-toggler" data-toggle="collapse" role="term" data-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                        <ul className="toggle-main-wrapper ">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-xl-8 col-lg-10 d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block">
                        <nav className="navbar navbar-expand-sm  d-block">
                            <ul className="navbar-nav ">
                                <li className="nav-item p-rel  wrap-nav-item">
                                    <a href="javascript:;" className="nav-link">
                                        Home
                                        <i className="fas fa-caret-down"></i>
                                    </a>
                                    <ul className="dropdown-items">
                                        <li><a href="index-01.html">Home 01</a></li>
                                        <li><a href="index-02.html">Home 02</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item p-rel  wrap-nav-item">
                                    <a href="javascript:;" className="nav-link">
                                        hotel
                                        <i className="fas fa-caret-down"></i>
                                    </a>
                                    <ul className="dropdown-items">
                                        <li className="p-rel"><a href="javascript:;">Hotel Listing </a>
                                            <ul className="sub-dropdown dropdown-items">
                                                <li><a href="listing-grid-left.html">Hotel Left Grid View</a></li>
                                                <li><a href="listing-grid-right.html">Hotel Right Grid View</a></li>
                                                <li><a href="grid-map-view.html">Hotel Map View</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="hotel-single-page.html">Hotel Single Page</a></li>
                                        <li><a href="404-style.html">404 Error</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item p-rel  wrap-nav-item">
                                    <a href="javascript:;" className="nav-link">
                                        shortcode
                                        <i className="fas fa-caret-down"></i>
                                    </a>
                                    <ul className="dropdown-items mega-menu">
                                        <li className="shortcode-menu">
                                            <ul>
                                                <li><a href="accordion.html">Accordion</a></li>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="client.html">Client</a></li>
                                                <li><a href="counter.html">Counter</a></li>
                                                <li><a href="element.html">Element</a></li>
                                            </ul>
                                        </li>
                                        <li className="shortcode-menu">
                                            <ul>
                                                <li><a href="feature_with_icon.html">Feature with icon</a></li>
                                                <li><a href="feature_with_images.html">Feature with images</a></li>
                                                <li><a href="footer.html">Footer</a></li>
                                                <li><a href="form.html">Form</a></li>
                                                <li><a href="heading.html">Heading</a></li>
                                            </ul>
                                        </li>
                                        <li className="shortcode-menu">
                                            <ul>
                                                <li><a href="image_box.html">Image Box</a></li>
                                                <li><a href="icon.html">Icon</a></li>
                                                <li><a href="page-header.html">Page Header</a></li>
                                                <li><a href="portfolio.html">Portfolio</a></li>
                                                <li><a href="pricing-table.html">Pricing Table</a></li>
                                            </ul>
                                        </li>
                                        <li className="shortcode-menu">
                                            <ul>
                                                <li><a href="progress-skills.html">Progress Skill</a></li>
                                                <li><a href="tab.html">Tab</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="testimonials.html">testimonials</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item p-rel  wrap-nav-item">
                                    <a href="javascript:;" className="nav-link">
                                        blog
                                        <i className="fas fa-caret-down"></i>
                                    </a>
                                    <ul className="dropdown-items">
                                        <li className="p-rel"><a href="javascript:;">Blog Single</a>
                                            <ul className="sub-dropdown dropdown-items">
                                                <li><a href="blog-left-singal.html">Single Left Sidebar</a></li>
                                                <li><a href="blog-right-single.html">Single Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="p-rel"><a href="javascript:;">Blog Categories </a>
                                            <ul className="sub-dropdown dropdown-items">
                                                <li><a href="blog-left-singal.html">Blog Left Sidebar</a></li>
                                                <li><a href="blog-right-single.html">Blog Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item  wrap-nav-item">
                                    <a href="contact-form.html" className="nav-link">
                                        contact
                                    </a>
                                </li>
                                <li className="nav-item p-rel wrap-nav-item">
                                    <a href="javascript:;" className="nav-link">
                                        <i className="fas fa-search"></i>
                                    </a>
                                    <div class="search-box dropdown-items">
                                        <input type="text" className="" placeholder="Search text" />
                                        <i className="fas fa-search"></i>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a href="add-hotel.html" className="btn btn-outline-dark">Add Hotel</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMenuNavbar