import { TypesPizzaType } from '../../types/types'


const initialState: TypesPizzaType = {
    types: ['тонкое', 'традиционное'],
    sizes: [26, 30, 40]
}

type initialStateType = typeof initialState

export const typesReducer = (state = initialState): initialStateType => state