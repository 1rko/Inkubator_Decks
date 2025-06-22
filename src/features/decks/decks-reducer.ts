import {Items} from "./decks-api.ts";

const initialState = {
    decks: [] as Items[], // todo: add type
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case "SET_DECKS":
            return {...state, decks: action.decks}
        case "ADD_DECK":
            return {...state, decks: [action.deck, ...state.decks]}
        default:
            return state
    }
}

export const setDecksAC = (decks: Items[]) => ({
    type: 'SET_DECKS',
    decks: decks
}) as const

export const addDeckAC = (deck: Items) => ({
    type: 'ADD_DECK',
    deck: deck
}) as const

type DecksActions = ReturnType<typeof setDecksAC> | ReturnType<typeof addDeckAC>
