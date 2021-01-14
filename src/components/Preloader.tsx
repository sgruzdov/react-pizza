import React from 'react'

import loadImg from '../assets/img/preloader.png'

const Preloader: React.FC = () => {
    return (
        <div className="preloader">
            <img src={loadImg} alt="loading"/>
        </div>
    )
}

export default Preloader
