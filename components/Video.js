import styles from '../styles/Navbar.module.css';
import Image from 'next/image'

function Video()
{
    return (
        <div className="video-main-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="video-icon" data-bs-toggle="modal" data-bs-target="#exampleModal-1">
                            <a href="javascript:;"> <Image src="images/Play-Icon.png" alt="" /></a>
                        </div>
                        <div className="modal fade" id="exampleModal-1" tabindex="-1" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <iframe  src="https://www.youtube.com/embed/wFQ9VQ5jyw8"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="video-sec">
                            <h4>
                                Get the Best Deals for you in<br />
                                Summer Holidays 20% OFF
                            </h4>
                            <button type="button" className="btn btn-primary">get code</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video