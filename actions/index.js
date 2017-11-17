
import * as types from './types.js';
import { AsyncStorage } from 'react-native';


export function deckListAction (decks) {
    return {
        type: types.DECK_LIST,
        decks
    }
}


export function fetchDecks() {
    return (dispatch) => {
        AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then((results) => {
            console.log('desk Data', results)
            dispatch(deckListAction(results))
        })
    }
}
