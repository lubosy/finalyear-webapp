import React from 'react';
import './sidebar.css'
import {Dashboard,LineStyle, TrendingUp, Assessment, MailOutline} from '@material-ui/icons';

function Sidebar(){
    return(
        <div className ='sidebar'>
        <div className='sidebarWrapper'> 
        <div className='sidebarMenu'> 
        <h3 className='sidebarTitle'>Dashboard</h3>
        <ul className='sidebarList'>
            <li className='sidebarItem active'>
            <Dashboard/> Overview
            </li>
            <li className='sidebarItem'>
            <LineStyle/> 
                Statistics
            </li>
            <li className='sidebarItem'>
            <TrendingUp/>  Reports
            </li>
            <li className='sidebarItem'>
            <Assessment/>  Summary
            </li>
            <li className='sidebarItem'>
            <MailOutline/>  Mail
            </li>
        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Sidebar;