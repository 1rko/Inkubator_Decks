import {decksApi} from "./decks-api.ts";
import {setDecksAC} from "./decks-reducer.ts";
import {AppDispatch} from "../../app/store.ts";

export const fetchDecksTC = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response  = await decksApi.fetchDecks()
            console.log(response .data)
            dispatch(setDecksAC(response .data.items))

        } catch (e) {
            console.log(e)
        }
    }
}