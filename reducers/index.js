import { combineReducers } from 'redux'
import { DECK_LIST } from '../actions'

const initialState = [
  {
    title: 'React',
    number: 2,
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  {
    title: 'JavaScript',
    number: 2,
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
]


function decksReducer (state=initialState, action) {
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

export default combineReducers({
    'decks': decksReducer
})