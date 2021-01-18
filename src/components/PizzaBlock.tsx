import React, { useState } from 'react'
import cn from 'classnames'
import { useSelector } from 'react-redux'

import { PizzaCardType, PizzaCart } from '../types/types'
import { AppStateType } from '../redux/store'

import Button from './Button'
import LazyLoadImg from './LazyLoadImg'

type PizzaBlockType = {
    item: PizzaCardType
    onClickAddPizza: (obj: PizzaCart) => void,
}

const PizzaBlock: React.FC<PizzaBlockType> = React.memo(({ item, onClickAddPizza }) => {
    const [activeType, setActiveType] = useState(item.types[0])
    const [activeSize, setActiveSize] = useState(item.sizes[0])
    const types = useSelector((state: AppStateType) => state.types)
    const cartItems = useSelector((state: AppStateType) => state.cart.items[item.id])


    const onAddPizza = () => {
        onClickAddPizza({ 
            id: item.id, 
            name: item.name, 
            imageUrl: item.imageUrl, 
            price: item.price,
            size: activeSize,
            type: types.types[activeType]
        })
    }

    return (
        <div className="pizza-block">
            <LazyLoadImg imageUrl={item.imageUrl} name={item.name}/>
            <h4 className="pizza-block__title">{item.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.types.map((type, index) => {
                        return <li 
                            key={index}
                            onClick={() => setActiveType(index)}
                            className={cn({
                                'active': activeType === index,
                                'disabled': !item.types.includes(index)
                            })}
                            >{type}</li>
                    })}
                </ul>
                <ul>
                    {types.sizes.map((size, index) => {
                        return <li 
                            key={index}
                            onClick={() => setActiveSize(size)}
                            className={cn({
                                'active': activeSize === size,
                                'disabled': !item.sizes.includes(size)
                            })}
                            >{size} см.</li>
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {item.price} ₽</div>
                <Button className="button--add" onClickAdd={onAddPizza} outline>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" />
                    </svg>
                    <span>Добавить</span>
                    {cartItems && <i>{cartItems.items.length}</i>}
                </Button>
            </div>
        </div>
    )
})

export default PizzaBlock
