
import * as types from './types.js';
import { AsyncStorage } from 'react-native';
import FLASHCARD_STORAGE_KEY from '../utils/helpers'

export function fetchDecksAction (decks) {
    return {
        type: types.DECK_LIST,
        decks
    }
    
}
