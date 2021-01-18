import React, { useState } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import loadImg from '../assets/img/loadingPizzaCart.svg'

type PropsType = {
    imageUrl: string
    name: string
}

const LazyLoadImg: React.FC<PropsType> = React.memo(({ imageUrl, name }) => {
    const [onload, setOnload] = useState(true)
    const handleLoading = () => setOnload(false)

    return <LazyLoadComponent><img className="pizza-block__image" onLoad={handleLoading} src={!onload ? imageUrl : loadImg} alt="Pizza" title={name} /></LazyLoadComponent>
})

export default LazyLoadImg
