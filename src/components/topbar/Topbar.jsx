import React, { Component } from 'react';

const Topbar = () => {
    return (
        <React.Fragment>
            <header className="_topbar">
                <div className="_topbar_wrapper">
                    <div className="_heading">
                        <h1>Discover</h1>
                    </div>
                    <div className="_user">
                        <img src="./src/assets/images/samurai.gif" className="_user_img" alt="user" />
                        <div className="_userrole">
                            <p className="_username">Social Influence</p>
                            <span className="_role">Admin</span>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Topbar;