import {AppRootState} from "../../app/store.ts";
import {Items} from "./decks-api.ts";

export const selectDecks = (state: AppRootState): Items[] => state.decksReducer.decks