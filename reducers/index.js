import { DECK_LIST } from '../actions'

function desks (state={}, action) {
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

export default desks