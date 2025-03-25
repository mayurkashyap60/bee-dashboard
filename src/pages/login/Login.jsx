import axios from "axios";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const userEmail = useRef();
    const userPassword = useRef();
    const [error, setError] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();

        let userEmailCheck = userEmail.current.value;
        let userPassCheck = userPassword.current.value;

        console.log(userEmailCheck);
        console.log(userPassCheck);

        try {
            if (userEmailCheck == "" || userPassCheck == "") {
                setError(true);
            }
            else {
                setError(false);
                const loginResponse = await axios.post('http://localhost:5000/api/auth/login', {
                    username: userEmailCheck,
                    password: userPassCheck
                });

                loginResponse.data && window.location.replace('/dashboard');
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    return (
        <React.Fragment>
            <section className="_login">
                <div className="_login_wrapper">
                    <div className="_left">
                        <img
                            src="./src/assets/images/loginbg.jpg"
                            className="_loginbg"
                            alt="loginimg"
                        />
                        <p className="_logo">Bee Logs</p>
                        <a href="#" className="_website">
                            Back to Website
                            <span className="material-symbols-outlined">north_east</span>
                        </a>
                        <h1 className="_text">
                            Capturing Moments, <br /> Creating Memories
                        </h1>
                    </div>
                    <div className="_right">
                        <div className="_right_wrapper">
                            <div className="_content">
                                <h1 className="_heading">Login with an account</h1>
                                <p className="_subheading">
                                    Don't have an account?{" "}
                                    <Link className="_loginCta" to="/register">
                                        Create
                                    </Link>
                                </p>
                            </div>
                            <div className="_form">
                                <form autoComplete="off" onSubmit={handleLogin}>
                                    <div className="_form_wrapper">
                                        <div className="_formbox">
                                            <input
                                                type="text"
                                                className="_field"
                                                name="email"
                                                id="email"
                                                placeholder="Enter your username"
                                                ref={userEmail}
                                            />
                                            {/* <span className="_error">This field is mandatory</span> */}
                                        </div>
                                        <div className="_formbox">
                                            <input
                                                type="text"
                                                className="_field"
                                                name="password"
                                                id="password"
                                                placeholder="Enter your password"
                                                ref={userPassword}
                                            />
                                            {/* <span className="_error">This field is mandatory</span> */}
                                        </div>
                                        <div className="_formbox">
                                            <span className="_error">
                                                {error && <span>All fields is mandatory</span>}
                                            </span>
                                            <button className="_btn">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <p className="_copyright">
                                Copyright &copy; 2024. All right reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};
