import {decksApi} from "./decks-api.ts";
import {addDeckAC, setDecksAC} from "./decks-reducer.ts";
import {AppDispatch} from "../../app/store.ts";

export const fetchDecksTC = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await decksApi.fetchDecks()
            console.log(response.data)
            dispatch(setDecksAC(response.data.items))

        } catch (e) {
            console.log(e)
        }
    }
}

export const addDecksTC = (name: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await decksApi.addDeck(name)
            dispatch(addDeckAC(response.data))

        } catch (e) {
            console.log(e)
        }
    }
}

