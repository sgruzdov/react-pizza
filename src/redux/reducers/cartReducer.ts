import produce from 'immer'

import { ActionType, CartItemsType, CartType, PizzaCart } from '../../types/types'

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

const getTotalPrice = (obj: CartItemsType): number => Object.values(obj).flat().reduce((sum, obj) => (obj.price * obj.amount) + sum, 0)
const getTotalCount = (obj: CartItemsType): number => Object.values(obj).flat().reduce((sum, obj) => obj.amount + sum, 0)
const findItem = (arr: PizzaCart[], action: PizzaCart): number => arr.findIndex(item => item.size === action.size && item.type === action.type)

export const cartReducer = (state = initialState, action: ActionType): initialStateType => {
    switch(action.type) {
        case ADD_PIZZA_CART: {
            const newArrItems = () => {
                let newArr: PizzaCart[] = []
            
                const currentArr = state.items[action.payload.id].find(item => item.size === action.payload.size && item.type === action.payload.type)
                if(currentArr) {
                    newArr = state.items[action.payload.id].map(item => {
                        if(item.size === action.payload.size && item.type === action.payload.type) {
                            const newItem = {...item}
                            newItem.amount = newItem.amount + 1
                            return newItem
                        } else {
                            return item
                        }
                    })
                } else {
                    newArr = [...state.items[action.payload.id], action.payload]
                }
                return newArr
            }

            return produce(state, draft => {
                draft.items[action.payload.id] = draft.items[action.payload.id] ? newArrItems() : [action.payload]
                draft.totalCount = getTotalCount(draft.items)
                draft.totalPrice = getTotalPrice(draft.items)
            })
        }
        case CLEAR_CART: {
            return produce(state, draft => {
                draft.items = {}
                draft.totalCount = 0
                draft.totalPrice = 0
            })
        }
        case CLEAR_PIZZA:
            const findClear = findItem([...state.items[action.payload.id]], action.payload)

            return produce(state, draft => {
                const newDraft = [...draft.items[action.payload.id]]
                newDraft.splice(findClear, 1)

                draft.items[action.payload.id] = newDraft
                draft.totalCount = getTotalCount(draft.items)
                draft.totalPrice = getTotalPrice(draft.items)
            })
        case PLUS_PIZZA: {
            const findPlus = findItem([...state.items[action.payload.id]], action.payload)

            return produce(state, draft => {
                draft.items[action.payload.id][findPlus].amount = draft.items[action.payload.id][findPlus].amount + 1
                draft.totalCount = getTotalCount(draft.items)
                draft.totalPrice = getTotalPrice(draft.items)
            })
        }
        case MINUS_PIZZA: {
            const findMinus = findItem([...state.items[action.payload.id]], action.payload)

            return produce(state, draft => {
                const currentAmountItem = draft.items[action.payload.id][findMinus].amount
                draft.items[action.payload.id][findMinus].amount = currentAmountItem > 1 ? currentAmountItem - 1 : currentAmountItem
                draft.totalCount = getTotalCount(draft.items)
                draft.totalPrice = getTotalPrice(draft.items)
            })
        }
        default:
            return state
    }
}