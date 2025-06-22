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
    default:
      return state
  }
}

export const setDecksAC = (decks: Items[]) =>({
  type: 'SET_DECKS',
  decks
})

type DecksActions = ReturnType<typeof setDecksAC>
