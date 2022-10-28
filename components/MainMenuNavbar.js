import Link from 'next/link';

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
                                <li className="nav-item wrap-nav-item">
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>
                                <li className="nav-item wrap-nav-item">
                                    <Link className="nav-link" href="/hotels">Hotels</Link>
                                </li>
                                <li className="nav-item wrap-nav-item">
                                    <Link className="nav-link" href="/clients">Clients</Link>
                                </li>
                                <li className="nav-item wrap-nav-item">
                                    <Link className="nav-link" href="/team">Teams</Link>
                                </li>
                                <li className="nav-item wrap-nav-item">
                                    <Link className="nav-link" href="/portfolio">Portfolio</Link>
                                </li>
                                <li className="nav-item wrap-nav-item">
                                    <Link className="nav-link" href="/testimonials">Testimonials</Link>
                                </li>
                                <li className="nav-item wrap-nav-item">
                                    <Link className="nav-link" href="/images">Images</Link>
                                </li>
                                <li className="nav-item wrap-nav-item">
                                    <Link className="nav-link" href="/blogs">Blogs</Link>
                                </li>
                                <li className="nav-item wrap-nav-item">
                                    <Link className="nav-link" href="/contact">Contact</Link>
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
                                    <Link className="btn btn-outline-dark" href="/hotels/add">Add Hotel</Link>
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