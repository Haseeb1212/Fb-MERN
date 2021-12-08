import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import { Avatar, IconButton } from '@material-ui/core'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ForumIcon from '@material-ui/icons/Forum'
import AddIcon from '@material-ui/icons/Add'
import './Header.css'



const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>

                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCzdFGYIo9Op39i4sGFt6Cq638YcQ_zxnuow&usqp=CAU' alt='fb' className='header__image' />
            </div>
            <div className='header__input'>
                <SearchIcon />
                <input placeholder='search facebook' type='text' />
            </div>
            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <FlagIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontOutlinedIcon fontsize='large' />
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src='https://parade.com/wp-content/uploads/2020/10/Muhammad-Ali-quotes.jpg' />
                    <h4>Haseeb</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>

                    <ForumIcon />
                </IconButton>
                <IconButton>

                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>

                    <ExpandMoreIcon />
                </IconButton>


            </div>

        </div>
    )
}

export default Header
