import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { AppStateType } from '../redux/store'
import { handleActiveCategoryThunk } from '../redux/reducers/pizzasReducer'

const Categories: React.FC = React.memo(() => {
    const filters = useSelector((state: AppStateType) => state.filters.categories)
    const activeItem = useSelector((state: AppStateType) => state.filters.activeCategory)
    const dispatch = useDispatch()

    return (
        <div className="categories">
            <ul>
                <li 
                    className={cn({'active': activeItem === null})}
                    onClick={() => dispatch(handleActiveCategoryThunk(null))}
                    >Все</li>
                {filters.map((item, index) => {
                    return (
                        <li 
                            className={cn({'active': activeItem === index + 1})}
                            onClick={() => dispatch(handleActiveCategoryThunk(index + 1))} 
                            key={item}
                        >{item}</li>
                    )
                })}
            </ul>
        </div>
    )
})

export default Categories