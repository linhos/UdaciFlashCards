import { DECK_LIST } from '../actions'

import {data} from '../utils/helpers'

const initialState = {
    'gameOfThrones': [{
        'answer': 1,
        'question': 'shared'
    }],
    'naruto': [],
}


function decks (state=initialState, action) {
    switch (action.type) {
        case DECK_LIST:
            return {
                ...state,
                ...action.decks
            }
        default:
            return state;
    }
}

export default decks