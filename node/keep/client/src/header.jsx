import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import Fade from '@mui/material/Fade';

function Header(){
    return  (<Fade in={true} timeout={1000}><div className="heading">
                <CreateIcon fontSize="medium" /> 
                Keeper
            </div></Fade>)
            
}

export default Header;