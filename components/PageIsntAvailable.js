import styles from '../styles/Navbar.module.css';

function PageIsntAvailable()
{
    return (  
        <div className="main-wrapper-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12">
                        <div className="main_wrapper_three_img">
                            <div className="wheel_img_one_wrapper">
                                <img src="images/wheel_img_1.png" className="img-responsive" alt="logo_img" />
                            </div>
                            <div className="wheel_img_two_wrapper">
                                <img src="images/wheel_img_2.png" className="img-responsive" alt="logo_img" />
                            </div>
                            <div className="wheel_img_three_wrapper">
                                <img src="images/wheel_img_3.png" className="img-responsive" alt="logo_img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6 col-xs-12 col-sm-12">
                        <div className="main_wrapper_three_content">
                            <h2>
                                <span>4</span>
                                <span>0</span>
                                <span>4</span>
                            </h2>
                            <h3>Sorry, This Page Isn't available :(</h3>
                        </div>
                    </div>
                    <div className="sb_banner_cont_iner_wrapper float_left pb-0">
                        <div className="container">
                            <ul>
                                <li>
                                    <span><i className="fas fa-street-view"></i></span>
                                    <input type="text" placeholder="Your Destination?" />
                                </li>
                                <li>
                                    <span><i className="far fa-calendar-alt"></i></span>
                                    <input type="text" className="datepicker" placeholder="10-12-2021" />
                                </li>
                                <li>
                                    <span><i className="far fa-calendar-alt"></i></span>
                                    <input type="text" className="datepicker" placeholder="10-12-2021" />
                                </li>
                                <li className="s-box">
                                    <span><i className="far fa-user"></i></span>
                                    <select>
                                        <option value="">1 Adult - 0 Child</option>
                                        <option value="">1 Adult - 1 Child</option>
                                        <option value="">2 Adult - 0 Child</option>
                                        <option value="">1 Adult - 0 Child</option>
                                        <option value="">1 Adult - 0 Child</option>
                                    </select>
                                </li>
                                <li>
                                    <button type="button" className="btn btn-primary">Search</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageIsntAvailable