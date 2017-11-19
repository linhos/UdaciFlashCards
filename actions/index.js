
import * as types from './types.js';
import { AsyncStorage } from 'react-native';
import FLASHCARD_STORAGE_KEY from '../utils/helpers'

export const fetchDeckstAction = decks => ({
    type: types.DECK_LIST,
    decks
});
