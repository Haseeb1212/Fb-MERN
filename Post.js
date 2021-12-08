import { Avatar } from '@material-ui/core'
import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import NearMeIcon from '@material-ui/icons/NearMe'
import './Post.css'

const Post = ({ profilePic,
    message,
    timestamp,
    imgName,
    userName }) => {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post__avatar' />

                <div className='post__topInfo'>

                    <h3>{userName}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>


                </div>


            </div>
            <div className='post__options'>

                <div className='post__option'>

                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className='post__option'>

                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className='post__option'>

                    <NearMeIcon />
                    <p>Share</p>
                </div>

                <div className='post__option'>

                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />

                </div>

            </div>
        </div>
    )
}

export default Post
