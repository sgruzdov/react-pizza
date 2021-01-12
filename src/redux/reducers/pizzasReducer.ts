import { getPizzas } from '../../firebase/api'
import { PizzaCardType } from '../../types/types'

export const GET_PIZZAS = 'GET_PIZZAS'

const initialState: PizzaCardType[] = []

type initialStateType = typeof initialState

export const pizzasReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case GET_PIZZAS:
            return action.payload
        default:
            return state
    }
}


export const getPizzasThunk = async (dispatch: any) => {
    const pizzas = await getPizzas()
    dispatch({ type: GET_PIZZAS, payload: pizzas })
}