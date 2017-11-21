import { combineReducers } from 'redux'


const initialState = {
  'decks': [
      {
      deck_id: 1,
      title: 'React',
      number: 2,
      icon: 'av-timer',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    {
      deck_id: 2,
      title: 'JavaScript',
      number: 1,
      icon: 'av-timer',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  ],
  'deck': []
}



function decksReducer (state=initialState, action) {

    switch (action.type) {
        case 'DECK_LIST':
            console.log("DECK LIST REDUCER")
            return {
                ...state,
                ...action.decks
            }
        case 'DECK_ITEM':
          console.log("DECK ITEM REDUCER")
          return Object.assign({}, state, {
            'deck': action.deck,
            
          })

        case 'ADD_CARD':
          let deckState = Object.assign({}, state);
          let deckItem = deckState.decks.find(b => b.title === action.title);
          deckItem.questions.push(action.card)
          return deckState
        
        default:
            return state;
    }
}

export default combineReducers({
    'decks': decksReducer
})