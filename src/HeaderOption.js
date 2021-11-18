import React from 'react'
import './HeaderOption.css';

function HeaderOption({avatar, title}) {
    return (
        <div className='headerOption'>
            <h4 className="headerOption__title">{title}</h4>
            
        </div>
    )
}

export default HeaderOption
