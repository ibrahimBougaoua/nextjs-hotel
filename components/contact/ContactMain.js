
function ContactMain()
{
    return (
        <div className="contact-main-wrapper">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                    <div className="form">
                        <h5><a href="javascript:;">sign up for newsletter</a></h5>
                        <p>Sign up for our mailing list to get latest updates and offers</p>
                        <form>
                            <div className="input-box p-rel">
                                <span><i className="far fa-envelope"></i></span>
                                <input type="text" placeholder="type your email address"/>
                                <button>subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 p-0">
                    <div className="offer-tag">
                        <h5><a href="javascript:;">Summer Holidays 20% OFF</a></h5>
                        <p>Offer valid for stays now through December 2021</p>
                        <a className="btn btn-light">Get code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMain