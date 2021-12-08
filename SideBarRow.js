import React from 'react'
import './SideBarRow.css'
import Avatar from '@material-ui/core/Avatar'

const SideBarRow = ({ src, Icon, title }) => {
    return (
        <div className='sidebarrow '>
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <p>{title}</p>

        </div>
    )
}

export default SideBarRow
