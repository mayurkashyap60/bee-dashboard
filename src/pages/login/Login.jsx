import React from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return ( 
        <React.Fragment>
            <section className="_login">
            <div className="_login_wrapper">
                <div className="_left">
                    <img src="./src/assets/images/loginbg.jpg" className="_loginbg" alt="loginimg" />
                    <p className="_logo">Bee Logs</p>
                    <a href="#" className="_website">Back to Website<span className="material-symbols-outlined">
                            north_east
                        </span></a>
                    <h1 className="_text">Capturing Moments, <br /> Creating Memories</h1>
                </div>
                <div className="_right">
                    <div className="_right_wrapper">
                        <div className="_content">
                            <h1 className="_heading">Login with an account</h1>
                            <p className="_subheading">Don't have an account? <Link className="_loginCta" to="/register">Create</Link>
                            </p>
                        </div>
                        <div className="_form">
                            <form autocomplete="off">
                                <div className="_form_wrapper">
                                    <div className="_formbox">
                                        <input type="text" className="_field" name="email" id="email"
                                            placeholder="Email address" />
                                        <span className="_error">This field is mandatory</span>
                                    </div>
                                    <div className="_formbox">
                                        <input type="text" className="_field" name="password" id="password"
                                            placeholder="Enter your password" />
                                        <span className="_error">This field is mandatory</span>
                                    </div>
                                    <div className="_formbox">
                                        <button className="_btn">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <p className="_copyright">Copyright &copy; 2024. All right reserved.</p>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
     );
}
 