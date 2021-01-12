import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'

const Cart = React.lazy(() => import('./pages/Cart'))
const Home = React.lazy(() => import('./pages/Home'))

const App: React.FC = () => {
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
