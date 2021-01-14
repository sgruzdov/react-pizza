import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'
import Preloader from './components/Preloader'

const Cart = React.lazy(() => import('./pages/Cart'))
const Home = React.lazy(() => import('./pages/Home'))

const App: React.FC = () => {
    return (
            <div className="wrapper">
                <Header />
            <div className="content">
                <Route exact path="/" component={() => <Suspense fallback={<Preloader />}><Home /></Suspense>}/>
                <Route exact path="/cart" component={() => <Suspense fallback={<Preloader />}><Cart /></Suspense>}/>
            </div>
        </div>
    )
}

export default App
