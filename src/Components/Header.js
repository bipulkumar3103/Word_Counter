import React from 'react'
import './Header.css'

export default function Header(props) {
  return (
    <div className='header-div'>
        <header className='header-header'>
          <ul className='header-ul'>
            <li className='header-li'><a href="">{props.home}</a></li>
            <li className='header-li'><a href="">{props.links}</a></li>
            <li className='header-li'><a href="">{props.contact}</a></li>
            <li className='header-li'><a href="">{props.aboutus}</a></li>
            
          </ul>
        </header>
    </div>
  )
}
