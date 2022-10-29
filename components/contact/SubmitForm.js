
function SubmitForm()
{
    return (
        <div className="submit-form-wrapper">
            <div className="news-main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="news-sec-heading">
                            <h3><a href="javascript:;">Get in Touch</a></h3>
                            <p>Morbi mollis vestibulum sollicitudin. Nunc in eros a justo facilisis rutrum. Aenean id
                                ullamcorper libero <br/> Vestibulum imperdiet nibh vel magna lacinia commodo ultricies,</p>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <form  className="contact-form form">
                                    <input type="text" name="full_name" id="fname" placeholder="Name" className="w-50 me-2 form-control require"/>
                                    <input type="email" name="email" id="email" placeholder="Email" className="w-50 form-control require"/>
                                    <input type="text" name="subject" id="subject" placeholder="Title" className="w-100 form-control require"/>
                                    <textarea name="message" rows="3" className="w-100 form-control require">Comments</textarea>
                                    <div className="response center"></div>
                                                <input type="hidden" name="form_type" value="contact" />
                                                <div className="tb_es_btn_wrapper os_contact_input">
                                                    <button type="button" className="submitForm btn btn-primary" ><i className="flaticon-play-button"></i> Send </button>
                                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmitForm