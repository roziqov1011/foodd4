import React, { useState } from 'react'
import './Header.scss'
import logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'

function Header() {
  const [active , setActive] = useState(0)
  return (
    <header className='header'>
      <Link to='/' className='header__logo'>
        <img src={logo} alt="" />
      </Link>
        <ul className='header__list'>
          <li className={active == 0? 'header__item active': 'header__item'} onClick={(e)=> setActive(e.target.parentNode.id)} id='0'>
            <Link id='0'>
              <i className="bi bi-house-door"></i>
            </Link>
          </li>
          <li className={active == 1? 'header__item active': 'header__item'} onClick={(e)=> setActive(e.target.parentNode.id)} id='1'>
            <Link id='1'>
            <i className="bi bi-gear-wide-connected"></i>
            </Link>
          </li>
          <li className={active == 2? 'header__item active': 'header__item'} onClick={(e)=> setActive(e.target.parentNode.id)} id='2'>
            <Link id='2'>
            <i className="bi bi-pie-chart"></i>
            </Link>
          </li>
          <li className={active == 3? 'header__item active': 'header__item'} onClick={(e)=> setActive(e.target.parentNode.id)} id='3'>
            <Link id='3'>
            <i className="bi bi-envelope"></i>
            </Link>
          </li>
          <li className={active == 4? 'header__item active': 'header__item'} onClick={(e)=> setActive(e.target.parentNode.id)} id='4'>
            <Link id='4'>
            <i className="bi bi-bell"></i>
            </Link>
          </li>
          <li className={active == 5? 'header__item active': 'header__item'} onClick={(e)=> setActive(e.target.parentNode.id)} id='5'>
            <Link id='5'>
            <i className="bi bi-gear"></i>
            </Link>
          </li>
        </ul>
        <button className='header__logOut' id='6'>
        <i className="bi bi-box-arrow-right"></i>
        </button>
    </header>
  )
}

export default Header