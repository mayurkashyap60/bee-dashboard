import React, { Component } from 'react';

const Sidebar = () => {
    return (
        <React.Fragment>
            <aside className="_left">
                <div className="_left_wrapper">
                    <div className="_logo">
                        <span className="material-symbols-outlined _icon">
                            flutter_dash
                        </span>
                    </div>
                    <div className="tab">
                        <button className="tablinks _btn active"><span
                            className="material-symbols-outlined _icon">
                            house
                        </span>Home</button>
                        <button className="tablinks _btn"><span
                            className="material-symbols-outlined _icon">
                            box_edit
                        </span>Categories</button>
                        <button className="tablinks _btn"><span
                            className="material-symbols-outlined _icon">
                            manage_history
                        </span>Management</button>
                        <button className="tablinks _btn"><span
                            className="material-symbols-outlined _icon">
                            manage_accounts
                        </span>Users</button>
                        <button className="tablinks _btn"><span
                            className="material-symbols-outlined _icon">
                            settings
                        </span>Settings</button>
                    </div>
                    <div className="_logout">
                        <button className="_btn _danger">
                            <span className="_icon material-symbols-outlined">
                                logout
                            </span>
                            Logout
                        </button>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    );
}

export default Sidebar;