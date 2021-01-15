export type CartItemsType = {
    [id: string]: {
        items: PizzaCart[]
        totalPrice: number
    }
}

export type CartType = {
    items: CartItemsType & {}
    totalPrice: number
    totalCount: number
}

export type PizzaCart = {
    id: string
    name: string
    imageUrl: string
    price: number
    size: number
    type: string
}

export type ItemsCartType = {
    id: number
}

export type PizzasType = {
    items: PizzaCardType[]
    isLoaded: boolean
}

export type PizzaCardType = {
    id: string
    category: number
    imageUrl: string
    name: string
    price: number
    rating: number
    sizes: number[]
    types: number[]
}

export type TypesPizzaType = {
    types: string[]
    sizes: number[]
}

export type FiltersPizzaType = {
    categories: string[]
    sort: FiltersType[]
    activeSort: string
    activeCategory: number | null
}

export type FiltersType = {
    name: string
    type: string
}