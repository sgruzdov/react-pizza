import produce from 'immer'

import { getCategoriesPizzas, getPizzas } from '../../firebase/api'
import { ActionType, PizzasType } from '../../types/types'
import { HANDLE_ACTIVE_CATEGORY } from './filtersReducer'

export const GET_PIZZAS = 'GET_PIZZAS'
export const TOGGLE_LOADING = 'TOGGLE_LOADING'
export const HANDLE_LOADING = 'HANDLE_LOADING'

const initialState: PizzasType = {
    items: [],
    isLoaded: false
}

type initialStateType = typeof initialState

export const pizzasReducer = (state = initialState, action: ActionType): initialStateType => {
    switch(action.type) {
        case GET_PIZZAS:
            return produce(state, draft => {
                    draft.items = action.payload
                    draft.isLoaded = true
            })
        case HANDLE_LOADING:
            return produce(state, draft => {
                draft.isLoaded = false
        })
        default:
            return state
    }
}


export const getPizzasThunk = async (dispatch: any) => {
    const pizzas = await getPizzas()
    dispatch({ type: GET_PIZZAS, payload: pizzas })
}


export const handleActiveCategoryThunk = (category: number | null) => async (dispatch: any): Promise<any> => {
    let pizzas = []
    dispatch({ type: HANDLE_ACTIVE_CATEGORY, payload: category })
    dispatch({ type: HANDLE_LOADING })
    if(category === null) {
        pizzas = await getPizzas()
    } else {
        pizzas = await getCategoriesPizzas(category)
    }
    dispatch({ type: GET_PIZZAS, payload: pizzas })
}