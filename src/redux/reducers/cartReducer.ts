import { CartType } from '../../types/types'

export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const ADD_PIZZA_CART = 'ADD_PIZZA_CART'

const initialState: CartType = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

type initialStateType = typeof initialState

export const cartReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case ADD_PIZZA_CART: {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id] ? [action.payload] : [
                    ...state.items[action.payload.id],
                    action.payload
                ]
            }

            const newTotalItems = [].concat.apply([], Object.values(newItems))
            const newTotalPrice = newTotalItems.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items: newItems,
                totalCount: +newTotalItems.length,
                totalPrice: newTotalPrice
            }
        }
        case SET_TOTAL_PRICE: 
            return {
                ...state,
                totalPrice: action.payload
            }
        case SET_TOTAL_COUNT: 
            return {
                ...state,
                totalCount: action.payload
            }
        default:
            return state
    }
}