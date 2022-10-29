import Link from 'next/link';

function TopMenu()
{
    return (
        <div className="top-menu">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-5 col-6 pe-0">
                        <div className="sub-top-menu">
                            <ul className="u-list">
                                <li className="dropdown-toggle p-rel d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block ">
                                    <a href="javascript:;"><i className="fas fa-dollar-sign"></i> &nbsp;usd</a>
                                    <ul className="top-dropdown">
                                        <li><a href="">usd</a></li>
                                        <li><a href="">uro</a></li>
                                        <li><a href="">inr</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown-toggle p-rel d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block">
                                    <a href="javascript:;"><i className="fas fa-globe"></i> &nbsp;eng</a>
                                    <ul className="top-dropdown">
                                        <li><a href="">Hindi</a></li>
                                        <li><a href="">tamil</a></li>
                                        <li><a href="">telgu</a></li>
                                    </ul>
                                </li>
                                <li className="n-border">
                                        <span>km</span>
                                        <input type="checkbox" hidden="hidden" id="username" />
                                        <label className="switch" for="username"></label>
                                        <span>miles</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-7 col-6">
                        <div className="sub-top-menu s-menu">
                            <ul className="u-list">
                                <li>
                                    <ul className="social-icon ">
                                        <li><a href="javascript:;"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="javascript:;"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="javascript:;"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="javascript:;"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </li>
                                <li className="n-disp"><a href="javascript:;"><i className="fas fa-phone-alt"></i> &nbsp;+1808
                                        111 9999</a></li>
                                <li className="n-border res-pd">
                                    <Link href="/user/signin">SING In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMenu