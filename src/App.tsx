/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'


import Header from './components/Header'
import { getPizzasThunk } from './redux/reducers/pizzasReducer'

const Cart = React.lazy(() => import('./pages/Cart'))
const Home = React.lazy(() => import('./pages/Home'))

const App: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPizzasThunk)
    }, [])

    return (
            <div className="wrapper">
                <Header />
            <div className="content">
                <Route exact path="/" component={() => <Suspense fallback={null}><Home /></Suspense>}/>
                <Route exact path="/cart" component={() => <Suspense fallback={null}><Cart /></Suspense>}/>
            </div>
        </div>
    )
}

export default App
