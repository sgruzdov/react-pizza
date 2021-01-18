import firebase from './config'
import { PizzaCardType } from '../types/types'

export const getPizzas = async (): Promise<PizzaCardType[]> => {
    const pizzasArr: PizzaCardType[] = []
    const pizzasRef = firebase.database().ref('pizzas/')
    await pizzasRef.once('value', snapshot => {
        Object.entries(snapshot.val()).map(([key, value]) => {
            const card: any = {
                ...value as {},
                id: key
            }
            return pizzasArr.push(card)
        })
    })
    pizzasRef.off()
    return pizzasArr
}

export const getCategoriesPizzas = async (category: number): Promise<PizzaCardType[]> => {
    const pizzasArr: PizzaCardType[] = []
    const pizzasRef = firebase.database().ref('pizzas/').orderByChild('category').equalTo(category)
    await pizzasRef.once('value', snapshot => {
        Object.entries(snapshot.val()).map(([key, value]) => {
            const card: any = {
                ...value as {},
                id: key
            }
            return pizzasArr.push(card)
        })
    })
    pizzasRef.off()
    return pizzasArr
}