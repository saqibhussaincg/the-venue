import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';



function Header() {
  return (
    <AppBar
     position='fixed'
     style={{
         backgroundColor:'#2f2f2f',
         boxShadow: 'none',
         padding: '10px 0px'
     }}
    >
    
    <Toolbar>

     <div className='header_logo'>
        <div className='font_righteous header_top_venue'>
            The Venue
        </div>
        <div className='header_logo_title'>
            Musical Events
        </div>
     </div>

    </Toolbar>

    </AppBar>
  )
}

export default Header