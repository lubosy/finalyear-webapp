import React from 'react';
import './sidebar.css'
import {Dashboard,LineStyle, TrendingUp, Assessment, MailOutline} from '@material-ui/icons';
import { Link } from 'react-router-dom';


function Sidebar(){
    return(
        <div className ='sidebar'>
        <div className='sidebarWrapper'> 
        <div className='sidebarMenu'> 
        <h3 className='sidebarTitle'>Dashboard</h3>
        <ul className='sidebarList'>

        <Link to="/" className='link'>
            <li className='sidebarItem active'>
            <Dashboard/> Overview
            </li>
            </Link>
            <li className='sidebarItem'>
            <LineStyle/> 
                Statistics
            </li>

            <Link to="/reports" className='link'>
            <li className='sidebarItem'>
            <TrendingUp/>  Reports
            </li>
                </Link>
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