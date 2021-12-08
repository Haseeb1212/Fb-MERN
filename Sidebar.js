import React from 'react'
import './Sidebar.css'
import SideBarRow from './SideBarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow src='https://parade.com/wp-content/uploads/2020/10/Muhammad-Ali-quotes.jpg' title='Haseeb' />
            <SideBarRow Icon={LocalHospitalIcon} title='Covid-19  Infoprmation Center' />
            <SideBarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SideBarRow Icon={PeopleIcon} title='Friends' />
            <SideBarRow Icon={ChatIcon} title='Messenger' />
            <SideBarRow Icon={StorefrontIcon} title='MarketPlace' />
            <SideBarRow Icon={VideoLibraryIcon} title='Videos' />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title='More' />




        </div>
    )
}

export default Sidebar
