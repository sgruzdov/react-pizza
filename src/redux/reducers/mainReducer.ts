

const initialState = {
    value: 0 as number | null
}

type initialStateType = typeof initialState


export const mainReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        default:
            return state
    }
}