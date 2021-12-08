import React from 'react'
import MessageSender from './MessageSender'
import StoryRelels from './StoryRelels'
import Post from './Post'

const Feed = () => {
    return (
        <div>
            <StoryRelels />
            <MessageSender />
            <Post
                profilePic=''
                message='Hello babes'
                timestamp='1601493943737'
                imgName='Image'
                userName='Haseeb'

            />
        </div>
    )
}

export default Feed
