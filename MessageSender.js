import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import './MessageSender.css'

const MessageSender = () => {
    const [input, setInput] = useState('');
    const [image, setImage] = useState(null)
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const handleSubmit = () => {
        console.log('Submitting')
    }



    return (
        <div className='messageSender'>
            <div className='messageSender__top'>

                <Avatar src='https://dpuk71x9wlmkf.cloudfront.net/assets/2020/02/10170118/11_V4-01.jpg' />
                <form>
                    <input type='text' className='messageSender__input' placeholder='What is on your mind' value={input}
                        onChange={(e) => setInput(e.target.value)}
                    ></input>
                    <input type='file' className='messageSender__Selector'
                        onChange={handleChange}>

                    </input>
                    <button onClick={handleSubmit} type='submit'>Hidden Submit</button>

                </form>

            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live video</h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: 'orange' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: 'green' }} />
                    <h3>Feeling/Activity</h3>
                </div>


            </div>

        </div>
    )
}

export default MessageSender
