import { CartItemsType, CartType } from '../../types/types'

export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const ADD_PIZZA_CART = 'ADD_PIZZA_CART'
export const CLEAR_CART = 'CLEAR_CART'

const initialState: CartType = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

type initialStateType = typeof initialState

const getTotalPrice = (arr: any): number => arr.reduce((sum: number, obj: any) => obj.price + sum, 0)

export const cartReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case ADD_PIZZA_CART: {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

                const newItems: CartItemsType = {
                ...state.items,
                [action.payload.id]: {
                        items: currentPizzaItems,
                        totalPrice: getTotalPrice(currentPizzaItems)
                    }
            }

            const newTotalItems = Object.values(newItems).map(obj => obj.items).flat()

            return {
                ...state,
                items: newItems,
                totalCount: +newTotalItems.length,
                totalPrice: getTotalPrice(newTotalItems)
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
        case CLEAR_CART: {
            return {
                items: {},
                totalCount: 0,
                totalPrice: 0
            }
        }
        default:
            return state
    }
}