import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { FiltersType } from '../types/types'
import { HANDLE_ACTIVE_CATEGORY } from '../redux/reducers/filtersReducer'

const Categories: React.FC = React.memo(() => {
    const filters = useSelector((state: any) => state.filters.categories)
    const activeItem = useSelector((state: any) => state.filters.activeCategory)
    const dispatch = useDispatch()

    return (
        <div className="categories">
            <ul>
                <li 
                    className={cn({'active': activeItem === null})}
                    onClick={() => dispatch({type: HANDLE_ACTIVE_CATEGORY, payload: null})}
                    >Все</li>
                {filters.map((item: string) => {
                    return (
                        <li 
                            className={cn({'active': activeItem === item})}
                            onClick={() => dispatch({type: HANDLE_ACTIVE_CATEGORY, payload: item})} 
                            key={item}
                        >{item}</li>
                    )
                })}
            </ul>
        </div>
    )
})

export default Categories