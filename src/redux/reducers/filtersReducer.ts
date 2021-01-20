import produce from 'immer'

import { FiltersPizzaType } from '../../types/types'

export const HANDLE_ACTIVE_SORT = 'HANDLE_ACTIVE_SORT'
export const HANDLE_ACTIVE_CATEGORY = 'HANDLE_ACTIVE_CATEGORY'

const initialState: FiltersPizzaType = {
    categories: ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'],
    sort: [
        {name: 'популярности', type: 'popular'},
        {name: 'цене', type: 'price'},
        {name: 'алфавиту', type: 'alphabet'}
    ],
    activeSort: 'popular',
    activeCategory: null
}

type initialStateType = typeof initialState

export const filtersReducer = (state = initialState, action: FiltersActionTypes): initialStateType => {
    switch(action.type) {
        case HANDLE_ACTIVE_SORT: 
            return produce(state, draft => {
                draft.activeSort = action.payload
            })
        case HANDLE_ACTIVE_CATEGORY:
            return produce(state, draft => {
                draft.activeCategory = action.payload
            })
        default:
            return state
    }
}

export type FiltersActionTypes = HandleActiveSortType | HandleActiveCategoryType

type HandleActiveSortType = {
    type: typeof HANDLE_ACTIVE_SORT
    payload: string
}

type HandleActiveCategoryType = {
    type: typeof HANDLE_ACTIVE_CATEGORY
    payload: number
}