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
    const cartItems = useSelector((state: AppStateType) => state.cart.items)
    const activeCategory = useSelector((state: AppStateType) => state.filters.activeCategory)
    const activeSort = useSelector((state: AppStateType) => state.filters.activeSort)

    const dispatch = useDispatch()

    useEffect(() => {
        if(pizzas.items.length === 0) dispatch(getPizzasThunk)
    }, [])

    const addPizzaToCart = (obj: PizzaCart) => {
        dispatch({type: ADD_PIZZA_CART, payload: obj})
    }

    const filterCategories = (pizzas: PizzaCardType[]): PizzaCardType[] => {
        if(!activeCategory) {
            return pizzas
        } else {
            return pizzas.filter(item => item.category === activeCategory)
        }
    }

    const filterSort = (pizzas: PizzaCardType[]): PizzaCardType[] => {
        switch (activeSort) {
            case 'popular':
                return pizzas.sort((a, b) => a.rating < b.rating ? 1 : -1)
            case 'price':
                return pizzas.sort((a, b) => a.price > b.price ? 1 : -1)
            case 'alphabet':
                return pizzas.sort((a, b) => a.name > b.name ? 1 : -1)
            default:
                return pizzas
        }
    }

    const filterPizzas = (pizzas: PizzaCardType[]) => {
            const CurrentfilterCategories = filterCategories(pizzas)
            const CurrentFilterSort = filterSort(CurrentfilterCategories)
            return CurrentFilterSort.map(item => <PizzaBlock onClickAddPizza={(obj: PizzaCart) => addPizzaToCart(obj)} addedCount={cartItems[item.id] && cartItems[item.id].length} item={item} key={item.id} />)
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
                    ? Array(10).fill(0).map((item, index) => <div key={`${item}_${index}`} className="pizza-block"><img className="load-img" src={sceletonCart} alt="loading"/></div>)
                    : filterPizzas(pizzas.items)
                }
            </div>
        </div>
    )
}

export default Home
