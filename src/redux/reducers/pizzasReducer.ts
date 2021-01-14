import { getPizzas } from '../../firebase/api'
import { PizzasType } from '../../types/types'

export const GET_PIZZAS = 'GET_PIZZAS'
export const TOGGLE_LOADING = 'TOGGLE_LOADING'

const initialState: PizzasType = {
    items: [],
    isLoaded: false
}

type initialStateType = typeof initialState

export const pizzasReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case GET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        default:
            return state
    }
}


export const getPizzasThunk = async (dispatch: any) => {
    const pizzas = await getPizzas()
    dispatch({ type: GET_PIZZAS, payload: pizzas })
}