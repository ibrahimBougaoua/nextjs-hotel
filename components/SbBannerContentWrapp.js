function SbBannerContentWrapp()
{
    return (
        <div className="sb_banner_content_wrapper animated-row float_left">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 align-self-center">
                        <div className="sb_banner_cont_iner_wrapper float_left">
                            <h2>Book & Experience Amazing Places</h2>
                            <h3>Compare 3000+ Hotels at once</h3>
                            <ul>
                                <li>
                                    <span><i className="fas fa-street-view"></i></span>
                                    <input type="text" placeholder="Your Destination?" />
                                </li>
                                <li>
                                    <span><i className="far fa-calendar-alt"></i></span>
                                    <input type="text" className="datepicker" placeholder="10-04-2022" />
                                </li>
                                <li>
                                    <span><i className="far fa-calendar-alt"></i></span>
                                    <input type="text" className="datepicker" placeholder="10-04-2022" />
                                </li>
                                <li className="s-box">
                                    <span><i class="far fa-user"></i></span>
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

export default SbBannerContentWrapp