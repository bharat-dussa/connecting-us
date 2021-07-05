import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const HeaderIcons = ({avatar, title, Icon}) => {
    return (
        <HeaderIconsContainer>
            {Icon && <Icon className='headerIcon'/>}
            {avatar && <Avatar className="header_avatar" alt="My Icon" src={avatar}/>}
            <div className="headertitle">{title}</div>
        </HeaderIconsContainer>
    )
}

export default HeaderIcons

export const HeaderIconsContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:2px;
    color:rgba(0,0,0,0.6);
    cursor: pointer;

    :hover{
        color:black;
    }
    .headerIcon {
        font-size:26px;
        /* color:rgba(0,0,0,0.6); */
    }
    .headertitle{
        font-size:13px;
    }
    .header_avatar{
        height:26px;
        width:26px;
    }
`;