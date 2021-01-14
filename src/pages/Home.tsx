/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'

import { getPizzasThunk } from '../redux/reducers/pizzasReducer'
import { AppStateType } from '../redux/store'
import { PizzaCardType } from '../types/types'


const Home: React.FC = () => {
    const pizzas = useSelector((state: AppStateType) => state.pizzas)
    const activeCategory = useSelector((state: AppStateType) => state.filters.activeCategory)
    const activeSort = useSelector((state: AppStateType) => state.filters.activeSort)

    const dispatch = useDispatch()


    useEffect(() => {
        if(pizzas.length === 0) dispatch(getPizzasThunk)
    }, [])

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
                return pizzas.sort((a: PizzaCardType, b: PizzaCardType) => a.rating < b.rating ? 1 : -1)
            case 'price':
                return pizzas.sort((a: PizzaCardType, b: PizzaCardType) => a.price > b.price ? 1 : -1)
            case 'alphabet':
                return pizzas.sort((a: PizzaCardType, b: PizzaCardType) => a.name > b.name ? 1 : -1)
            default:
                return pizzas
        }
    }

    const filterPizzas = (pizzas: PizzaCardType[]) => {
            const CurrentfilterCategories = filterCategories(pizzas)
            const CurrentFilterSort = filterSort(CurrentfilterCategories)
            return CurrentFilterSort.map(item => <PizzaBlock item={item} key={item.id} />)
    }
    console.log('render Home')

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {filterPizzas(pizzas)}
            </div>
        </div>
    )
}

export default Home
