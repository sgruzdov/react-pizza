import { CartItemsType, CartType } from '../../types/types'

export const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
export const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
export const ADD_PIZZA_CART = 'ADD_PIZZA_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const CLEAR_PIZZA = 'CLEAR_PIZZA'
export const PLUS_PIZZA = 'PLUS_PIZZA'
export const MINUS_PIZZA = 'MINUS_PIZZA'

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
        case CLEAR_PIZZA:
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalLength = newItems[action.payload].items.length
            delete newItems[action.payload]

            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalLength
            }
        case PLUS_PIZZA: {
            const newItemsPlus = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]

            const newStateItems: CartType = {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItemsPlus,
                        totalPrice: getTotalPrice(newItemsPlus)
                    }
                }
            }

            return {
                ...newStateItems,
                totalPrice: getTotalPrice(Object.values(newStateItems.items).map(obj => obj.items).flat()),
                totalCount: Object.values(newStateItems.items).map(obj => obj.items).flat().length
            }
        }
        case MINUS_PIZZA: {
            const oldItems = state.items[action.payload].items
            const newItemsMinus = oldItems.length > 1 ? oldItems.slice(1) : oldItems

            const newStateItems: CartType = {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItemsMinus,
                        totalPrice: getTotalPrice(newItemsMinus)
                    }
                }
            }

            return {
                ...newStateItems,
                totalPrice: getTotalPrice(Object.values(newStateItems.items).map(obj => obj.items).flat()),
                totalCount: Object.values(newStateItems.items).map(obj => obj.items).flat().length
            }
        }
        default:
            return state
    }
}