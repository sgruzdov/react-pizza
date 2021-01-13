

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
    activeSort: string,
    activeCategory: string | null
}

export type FiltersType = {
    name: string
    type: string
}