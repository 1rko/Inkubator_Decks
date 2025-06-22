import s from './DecksList.module.css'
import {useEffect} from "react";
import {selectDecks} from "../decks-selectors.ts";
import {fetchDecksTC} from "../decks-thunks.ts";
import {useAppDispatch, useAppSelector} from "../../../app/store.ts";

export const DecksList = () => {
    const dispatch = useAppDispatch()

    const decks = useAppSelector(selectDecks)

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, []);

    const renderedDecks = decks.map(deck =>
        <li key={deck.id} className={s.item}>
            <div>{deck.id}</div>
            <div>
                <span>Author: </span>
                {deck.author.name}
            </div>
            <div>
                <span>Created: </span>
                {deck.created}
            </div>
            <div>
                <span>Updeted: </span>
                {deck.updated}
            </div>

        </li>
    )
    return <ul className={s.list}>
        {
            renderedDecks
        }
    </ul>
}
