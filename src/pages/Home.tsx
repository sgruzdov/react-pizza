/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'

import { getPizzasThunk } from '../redux/reducers/pizzasReducer'
import { AppStateType } from '../redux/store'
import { PizzaCardType, PizzaCart } from '../types/types'
import sceletonCart from '../assets/img/sceletonPizzaCart.svg'
import { ADD_PIZZA_CART } from '../redux/reducers/cartReducer'


const Home: React.FC = () => {
    const pizzas = useSelector((state: AppStateType) => state.pizzas)
    const activeSort = useSelector((state: AppStateType) => state.filters.activeSort)

    const dispatch = useDispatch()

    useEffect(() => {
        if(pizzas.items.length === 0) dispatch(getPizzasThunk)
    }, [])

    const addPizzaToCart = (obj: PizzaCart) => {
        dispatch({type: ADD_PIZZA_CART, payload: obj})
    }

    const filterSort = (pizzas: PizzaCardType[]): PizzaCardType[] => {
        switch (activeSort) {
            case 'popular':
                return [...pizzas].sort((a, b) => a.rating < b.rating ? 1 : -1)
            case 'price':
                return [...pizzas].sort((a, b) => a.price > b.price ? 1 : -1)
            case 'alphabet':
                return [...pizzas].sort((a, b) => a.name > b.name ? 1 : -1)
            default:
                return pizzas
        }
    }

    const filterPizzas = (pizzas: PizzaCardType[]) => {
            const CurrentFilterSort = filterSort(pizzas)
            return CurrentFilterSort.map(item => <PizzaBlock 
                                                    onClickAddPizza={(obj: PizzaCart) => addPizzaToCart(obj)} 
                                                    item={item} 
                                                    key={item.id} />)
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                !pizzas.isLoaded
                    ? Array(4).fill(0).map((item, index) => <div key={`${item}_${index}`} className="pizza-block"><img className="load-img" src={sceletonCart} alt="loading"/></div>)
                    : filterPizzas(pizzas.items)
                }
            </div>
        </div>
    )
}

export default Home
