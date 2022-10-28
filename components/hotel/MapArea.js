
function MapArea()
{
    return (
        <div className="map-main-wrapper p-rel">
            <div className="with-amp">
                <div className="map-view">
                    <div className="google-map" id="google_map"></div>
                </div>  
            </div>
            <div className="sb_banner_cont_iner_wrapper float_left">
                <div className="container">
                    <ul>
                        <li>
                        <span><i className="fas fa-street-view"></i></span>
                        <input type="text" name="des" id="des" placeholder="Your Destination?"/>
                        </li>
                        <li>
                        <span><i className="far fa-calendar-alt"></i></span>
                        <input type="text" name="picker" className="datepicker" placeholder="09-04-2022"/>
                        </li>
                        <li>
                        <span><i className="far fa-calendar-alt"></i></span>
                        <input type="text" name="pickar2" className="datepicker" placeholder="10-04-2022"/>
                        </li>
                        <li className="s-box">
                        <span><i className="far fa-user"></i></span>
                        <select name="selectone" id="selectone">
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
    )
}

export default MapArea