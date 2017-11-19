import { DECK_LIST } from '../actions'



function decks (state={}, action) {
    switch (action.type) {
        case DECK_LIST:
            console.log(action.decks)
            return {
                ...state,
                ...action.decks
            }
        default:
            return state;
    }
}

export default decks