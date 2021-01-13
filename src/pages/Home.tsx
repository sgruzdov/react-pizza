/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock'
import SortPopup from '../components/SortPopup'

import { getPizzasThunk } from '../redux/reducers/pizzasReducer'
import { AppStateType } from '../redux/store'


const Home: React.FC = () => {
    const pizzas = useSelector((state: AppStateType) => state.pizzas)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPizzasThunk)
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <SortPopup />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas.map(item => <PizzaBlock item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default Home
