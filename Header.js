import React from 'react';
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = ({backButton}) => {
    const history = useHistory()
    return (
        <div className='header'>
            
            {backButton ? 
             (<IconButton  onClick = {() => history.replace(backButton)} > 
                 <ArrowBackIosIcon className='header__icon'  fontSize="large" /> 
              </IconButton>) : 
             (<IconButton> <PersonIcon className="header__icon" fontSize="large"/> </IconButton>)}
            
            <Link to="/">
                <img 
                className="header__logo" 
                src="data:image/png;base64,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" 
                alt="tinder logo" />
            </Link>
            

            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large" /> 
                </IconButton>
            </Link>
            
            
        </div>
    )
}

export default Header;
