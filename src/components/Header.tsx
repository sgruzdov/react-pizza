import React from 'react'
import { Link } from 'react-router-dom'

import logoSvg from '../assets/img/preloader.png'
import HeaderCart from './HeaderCart'


const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="container">
                <Link to="/" className="header__logo">
                    <img width="38" src={logoSvg} alt="Pizza logo" />
                    <div>
                        <h1>Pizza</h1>
                        <p>Есть то, что нас объединяет</p>
                    </div>
                </Link>
                <HeaderCart />
            </div>
        </div>
    )
}

export default Header
