
export default function SignupForm()
{
    return (
        <div class="signup-form-main-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-12 col-sm-12 col-12 p-0 ">
                        <div class="s-cont-img p-rel">
                            <div>
                                <h2><a href="javascript:;">Get the Best Deals for you in Summer Holidays 20% OFF</a></h2>
                                <button type="button" class="btn btn-primary">add hotel</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 col-12 p-0">
                        <div class="signup-form">
                            <form>
                                <div class="p-rel">
                                    <button class="f-btn-clr">Login with facebook</button>
                                    <i class="fab fa-facebook-f"></i>
                                </div>
                                <div class="p-rel">
                                    <button class="g-btn-clr">Login with google</button>
                                    <span>
                                        <i class="fab fa-google-plus-g"></i>
                                    </span>
                                </div>
                                <div class="text">
                                    or
                                </div>
                                <div class="p-rel">
                                    <input type="email" placeholder="Email Address*" class="text-area w-100"/>
                                    <i class="fas fa-envelope icon-pos"></i>
                                </div>
                                <div class="p-rel">
                                    <input type="password" placeholder="password*" class="text-area w-100"/>
                                    <i class="fas fa-lock-open icon-pos"></i>
                                </div>
                                <ul>
                                    <li>
                                        <input type="checkbox"/>
                                        <label>Remember me</label>
                                    </li>
                                    <li id="forget">
                                        <a href="javascript:;">Forget password</a>
                                    </li>
                                </ul>
                                <div>
                                    <a href="dashboard.html" class="l-btn-clr">log in</a>
                                </div>
                                <div id="top-border">
                                    <a href="javascript:;">Dont't have an account/</a>
                                    <a href="javascript:;" id="sign-btn">sign up</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}