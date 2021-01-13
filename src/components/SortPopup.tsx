import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import cn from 'classnames'

import { HANDLE_ACTIVE_SORT } from '../redux/reducers/filtersReducer'
import { AppStateType } from '../redux/store'

const SortPopup: React.FC = React.memo(() => {
    const [visiblePopup, setVisiblePopup] = useState(false)
    const sortRef = useRef<HTMLInputElement>(null)
    const filters = useSelector((state: AppStateType) => state.filters.sort)
    const activeItem = useSelector((state: AppStateType) => state.filters.activeSort)
    const dispatch = useDispatch()

    const handleOutsideClick = (e: any): void => {
        if(!e.path.includes(sortRef.current)) {
            setVisiblePopup(false)
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
        return () => document.body.removeEventListener('click', handleOutsideClick)
    }, [])

    const toggleVisiblePopup = (): void => {
        setVisiblePopup(!visiblePopup)
    }
console.log(typeof filters)
    return (
        <div className="sort" ref={sortRef}>
            <div className="sort__label">
                <svg className={cn({'rotated': visiblePopup})} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{filters.find((item) => item.type === activeItem && item.name).name}</span>
            </div>
            {
                visiblePopup && 
                <div className="sort__popup">
                    <ul>
                        {filters.map(item => {
                            return (
                                <li 
                                    className={cn({'active': item.type === activeItem})}
                                    onClick={() => dispatch({type: HANDLE_ACTIVE_SORT, payload: item.type})} 
                                    key={item.name}
                                >{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
            }
        </div>
    )
})

export default SortPopup
