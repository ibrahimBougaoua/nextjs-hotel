import styles from '../styles/Navbar.module.css';
import Image from 'next/image'

function BottomFooter()
{
    return (
            <div className="bottom-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <p>© 2021-22 Webstrot | All Rights Reserved. Design by <a href="http://www.webstrot.com/">Webstrot</a></p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                <ul>
                                    <li>
                                        <a href=""> <Image src="images/icon-logo-1.jpg" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""><Image src="images/icon-logo-2.jpg" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""><Image src="images/icon-logo-3.jpg" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href=""><Image src="images/icon-logo-4.jpg" alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="">  <Image src="images/icon-logo-5.jpg" alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default BottomFooter