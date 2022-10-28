import styles from '../styles/Navbar.module.css';

function SBanner()
{
    return (  
        <div className="s-banner-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="s-heading-section">
                            <h2><a href="javascript:;">404 Error Page</a></h2>
                            <ul>
                                <li><a href="index-01.html">Home</a></li>
                                <li><a href="javascript:;"><i className="fas fa-chevron-right"></i></a></li>
                                <li><a href="javascript:;">404 Error</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SBanner