import React from 'react'
import './topbar.css'
import {ExitToApp} from '@material-ui/icons'

function Topbar(){
    return(<div className='topbar'>
     <div className='topbarWrapper'>
     <div className='topbarLeft'>
     <span className='logo'>Hello User</span>
     </div>
     <div className='topbarRight'>
     <div className='topbarIconContainer'>
        <ExitToApp/>
        LogOut
     </div>
      </div>
    </div>
    
    </div>);
}

export default Topbar;