import React from 'react'
import { HeaderStyled } from './header-style'
import { ReactComponent as ReactLogo } from '../../assets/logo/logo.svg'
import SearchIcon from '@material-ui/icons/Search';
import HeaderIcons from './header-icons';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="header_left">
                <ReactLogo className="HeaderLogo"/>
                <div className="header_search">
                    <div className="icon"><SearchIcon /></div>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header_right">
                <HeaderIcons Icon={HomeIcon} title='Home'/>
                <HeaderIcons Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderIcons Icon={WorkIcon} title='Jobs'/>
                <HeaderIcons Icon={QuestionAnswerIcon} title='Messaging'/>
                <HeaderIcons Icon={NotificationsIcon} title='Notifications'/>
                <HeaderIcons avatar={'https://lh3.googleusercontent.com/ogw/ADea4I5eou9vXB7GNO5XUqc4RLxrMJvLl2smpGM6GiNwKw=s32-c-mo'} title='me'/>
            </div>
        </HeaderStyled>
    )
}

export default Header
