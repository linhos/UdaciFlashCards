
import * as types from './types.js';
import { AsyncStorage } from 'react-native';
import FLASHCARD_STORAGE_KEY from '../utils/helpers'

export function fetchDecksAction (decks) {
    return {
        type: types.DECK_LIST,
        decks
    }
    
}

export function getDeckAction(deck) {
    return {
        type: types.DECK_ITEM,
        deck
    }
}


export function addCardAction(title, card) {
    return {
        type: types.ADD_CARD,
        title,
        card
    }
}

export function createDeckAction(deck) {
    return {
        type: types.CREATE_DECK,
        deck
    }
}