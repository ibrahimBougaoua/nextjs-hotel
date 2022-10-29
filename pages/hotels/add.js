import Head from "next/head"
import Header from "../../components/Header"
import SbGridMain from "../../components/hotel/SbGridMain";
import Newsletter from "../../components/Newsletter";

export default function Add()
{
    return (
        <>
            <Head>
                <title>Add Hotel</title>
                <meta name="description" content="Add Hotel" />
            </Head>
            <Header />
            <div className="hotel-main-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <h2>New-Hotel</h2>
                            <form className="new_property_box">
                                <div className="form_property">
                                    <h3>Description &amp; Price</h3>
                                    <div className="fields">
                                        <div className="row">
                                            <div className="col-12">
                                                <label className="no_margine">title</label>
                                                <input type="text" name="title" placeholder="Enter your hotel name"/>
                                            </div>
                                            <div className="col-12">
                                                <label>Description</label>
                                                <textarea placeholder=""></textarea>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label>type</label>
                                                <div className="search_filte select-fields">
                                                    <select className="select-box">
                                                        <option value="" selected="selected">Select a Type</option>
                                                        <option value="31">one star</option>
                                                        <option value="87">two star</option>
                                                        <option value="41">three star</option>
                                                        <option value="40">four star</option>
                                                        <option value="85">five star</option>
                                                        <option value="86">seven star</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label>Status</label>
                                                <div className="search_filte select-fields">
                                                    <select className="select-box">
                                                        <option value="" selected="selected">Select a Status</option>
                                                        <option value="44">available</option>
                                                        <option value="45">unavailable</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label>Price</label>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text search_filte select-fields"
                                                        id="basic-addon2">$</span>
                                                    <input type="text" className="form-control" placeholder="Per/ Night"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_property">
                                    <h3>Add Room</h3>
                                    <div className="fields">
                                        <div className="row">
                                            <h4 className="mt-3">Comfort Room</h4>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <label>Room Name</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <label>Image</label>
                                                <div className="pd_order_filed_input_box float_left img-select">
                                                    <div className="file-chooser">
                                                        <input type="file"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <label>Price</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <h6 className="mt-3">Room Service Added</h6>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox51" type="checkbox"/>
                                                <label for="checkbox51">outside windows</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox52" type="checkbox"/>
                                                <label for="checkbox52">TV-cable or satellite</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox53" type="checkbox"/>
                                                <label for="checkbox53">Ac Room</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox54" type="checkbox"/>
                                                <label for="checkbox54">Non-Ac Room</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox55" type="checkbox"/>
                                                <label for="checkbox55">24X7 Reception facility.</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox56" type="checkbox"/>
                                                <label for="checkbox56">Telephone </label>
                                            </div>

                                        </div>
                                        <div className="row mt-4">
                                            <h4 className="mt-3">Luxury Room</h4>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <label>Room Name</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <label>Image</label>
                                                <div className="pd_order_filed_input_box float_left img-select">
                                                    <div className="file-chooser">
                                                        <input type="file"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <label>Price</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <h6 className="mt-3">Room Service Added</h6>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox57" type="checkbox"/>
                                                <label for="checkbox57">outside windows</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox58" type="checkbox"/>
                                                <label for="checkbox58">TV-cable or satellite</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox59" type="checkbox"/>
                                                <label for="checkbox59">Ac Room</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox50" type="checkbox"/>
                                                <label for="checkbox50">Non-Ac Room</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox61" type="checkbox"/>
                                                <label for="checkbox61">24X7 Reception facility.</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox62" type="checkbox"/>
                                                <label for="checkbox62">Telephone </label>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <h4 className="mt-3">Deluxe Room</h4>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <label>Room Name</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <label>Image</label>
                                                <div className="pd_order_filed_input_box float_left img-select">
                                                    <div className="file-chooser">
                                                        <input type="file"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                                <label>Price</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <h6 className="mt-3">Room Service Added</h6>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox71" type="checkbox"/>
                                                <label for="checkbox71">outside windows</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox72" type="checkbox"/>
                                                <label for="checkbox72">TV-cable or satellite</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox73" type="checkbox"/>
                                                <label for="checkbox73">Ac Room</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox74" type="checkbox"/>
                                                <label for="checkbox74">Non-Ac Room</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox75" type="checkbox"/>
                                                <label for="checkbox75">24X7 Reception facility.</label>
                                            </div>
                                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox76" type="checkbox"/>
                                                <label for="checkbox76">Telephone </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="form_property">
                                    <h3>Social Media</h3>
                                    <div className="fields">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label className="no_margine">Facebook</label>
                                                <input type="text" name="title" placeholder="Enter your property title"/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label>Instagram</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label>Twitter</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label>Linked In</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <label>Prnterest</label>
                                                <div className="search_filte select-fields">
                                                    <input type="text"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="form_property">
                                    <h3>Features</h3>
                                    <div className="fields">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox1" type="checkbox"/>
                                                <label for="checkbox1">Breakfast</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox2" type="checkbox"/>
                                                <label for="checkbox2">Room Service</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox3" type="checkbox"/>
                                                <label for="checkbox3">Good Interior</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox4" type="checkbox"/>
                                                <label for="checkbox4">Transport</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox5" type="checkbox"/>
                                                <label for="checkbox5">Good Drinks</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox6" type="checkbox"/>
                                                <label for="checkbox6">Internet Access</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox7" type="checkbox"/>
                                                <label for="checkbox7">Swimming pool</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox8" type="checkbox"/>
                                                <label for="checkbox8">Gift shop</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox9" type="checkbox"/>
                                                <label for="checkbox9">Meeting facilities</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox10" type="checkbox"/>
                                                <label for="checkbox10">Sunset boat trip</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox11" type="checkbox"/>
                                                <label for="checkbox11">security</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="checkbox12" type="checkbox"/>
                                                <label for="checkbox12">Public computer</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_property">
                                    <h3>Pricing Plan</h3>
                                    <div className="fields">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="radio1" type="radio" className="radio-btn" name="selectOne"/>
                                                <label for="radio1">Comfort Room</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="radio2" type="radio" className="radio-btn" name="selectOne"/>
                                                <label for="radio2">Luxury Service</label>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <input id="radio3" type="radio" className="radio-btn" name="selectOne"/>
                                                <label for="radio3">Deluxe room</label>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="form_property">
                                    <h3>Contact Information</h3>
                                    <div className="fields">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <label className="no_margine">Name</label>
                                                <input type="text" name="title" placeholder="Enter your name"/>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                                <label>Email Id</label>
                                                <input type="text" placeholder="example@gmail.com"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_property">
                                    <h3>Location &amp; map</h3>
                                    <div className="fields">
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                <label className="no_margine">map</label>
                                                <div className="map_ifram">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.622320563105!2d70.40193721533079!3d20.887267897968485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39587a3a1e316a17%3A0x31f092fe31774bbe!2sSomnath%20Temple!5e0!3m2!1sen!2sin!4v1613653257165!5m2!1sen!2sin" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label className="no_margine">ADDRESS *</label>
                                                        <input type="text" name="address" placeholder="Enter hotel address"/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <label>zip *</label>
                                                        <input type="text" name="zip_code" placeholder="Enter hotel zip"/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <label>LONGITUDE</label>
                                                        <input type="text" name="longitude" placeholder=""/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <label>LATITUDE</label>
                                                        <input type="text" name="latitude" placeholder=""/>
                                                    </div>
                                                    <div className="col-12">
                                                        <label>LOCATION*</label>
                                                        <div className="search_filter select-fields">
                                                            <select className="select-box">
                                                                <option value="" selected="selected">Select location</option>
                                                                <option value="104">Agar</option>
                                                                <option value="105">Alirajpur</option>
                                                                <option value="106">Anuppur</option>
                                                                <option value="107">Ashoknagar</option>
                                                                <option value="108">Balaghat</option>
                                                                <option value="109">Barwani</option>
                                                                <option value="92">Bhopal</option>
                                                                <option value="89">Dewas</option>
                                                                <option value="90">Indore</option>
                                                                <option value="93">Mahu</option>
                                                                <option value="91">Ujjain</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form_property">
                                    <div className="ex_top_mar">
                                        <h3>images</h3>
                                        <div className="fields">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="pd_order_filed_input_box float_left">
                                                        <div className="file-chooser">
                                                            <input type="file"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Video</h3>
                                    <div className="fields">
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text" name="youtube_link" placeholder="https://www.youtube.com/watch?v=dVkK36KOcqs"/>
                                                <label className="no_margine">Allow Youtube OR Vimeo Video URL</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <button className="btn btn-default mb-5">Save &amp; Preview</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}