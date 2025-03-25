import axios from 'axios';
import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';

export const Register = () => {

    const [userFname, setUserFname] = useState("");
    const [userLname, setUserLname] = useState("");
    const [useremail, setUseremail] = useState("");
    const [userpass, setUserpass] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
                
        try { 
            
            if (userFname == "" || userLname == "" || useremail == "" ||  userpass == "") {
                setError(true);
            }
            else{
                let fullName = userFname + ' ' + userLname; 
                const registerUser = await axios.post('http://localhost:5000/api/auth/register', {
                    username: fullName,
                    email: useremail,
                    password:userpass
                });
                registerUser.data && window.location.replace('/login');
            }

        } catch (error) {
            setError(true);
        }

    }


    return ( 
        <React.Fragment>
            <section className="_register">
            <div className="_register_wrapper">
                <div className="_left">
                    <img src="./src/assets/images/loginbg.jpg" className="_registerbg" alt="loginimg" />
                    <p className="_logo">Bee Logs</p>
                    <a href="#" className="_website">Back to Website<span className="material-symbols-outlined">
                            north_east
                        </span></a>
                    <h1 className="_text">Capturing Moments, <br/> Creating Memories</h1>
                </div>
                <div className="_right">
                    <div className="_right_wrapper">
                        <div className="_content">
                            <h1 className="_heading">Create an account</h1>
                            <p className="_subheading">Already have an account? <Link className="_registerCta" to="/login">Log in</Link>
                            </p>
                        </div>
                        <div className="_form">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="_form_wrapper">
                                    <div className="_formbox fname">
                                        <input type="text" className="_field" name="fname" id="fname"
                                            placeholder="First name" onChange={e=>setUserFname(e.target.value)} />
                                        {/* <span className="_error">{error && <span>This field is mandatory</span>}</span> */}
                                    </div>
                                    <div className="_formbox lname">
                                        <input type="text" className="_field" name="lname" id="lname"
                                            placeholder="Last name" onChange={e=>setUserLname(e.target.value)}/>
                                        
                                        {/* <span className="_error">{error && <span>This field is mandatory</span>}</span> */}
                                    </div>
                                    <div className="_formbox">
                                        <input type="text" className="_field" name="email" id="email"
                                            placeholder="Email address" onChange={e=>setUseremail(e.target.value)}/>
                                        
                                        {/* <span className="_error">{error && <span>This field is mandatory</span>}</span> */}
                                    </div>
                                    <div className="_formbox">
                                        <input type="text" className="_field" name="password" id="password"
                                            placeholder="Enter your password" onChange={e=>setUserpass(e.target.value)}/>
                                        
                                        {/* <span className="_error">{error && <span>This field is mandatory</span>}</span> */}
                                    </div>
                                    <div className="_formbox">
                                    <span className="_error">{error && <span>All fields is mandatory</span>}</span>
                                        <button className="_btn">Create account</button>
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
 