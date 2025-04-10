import React from 'react';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Home from '../../components/home/Home';

export const Dashboard = () => {
    return (
        <React.Fragment>
            <Topbar />
            <Sidebar />
            <Home />
        </React.Fragment>
    );
}
