import {AsyncStorage} from 'react-native'

const FLASHCARD_STORAGE_KEY = 'UdaciFlashCard:card'

const data = {
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
      },
      {
        deck_id: 3,
        title: 'Python',
        number: 1,
        icon: 'av-timer',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    ]
}
  

export function fetchDecks() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
        return results === null ? setInitialData() : JSON.parse(results)
    });
}


export function setInitialData() {
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
    return data;
}
    

export function getDeck(title) {
    return fetchDesk()
        .then(desks => desks[title])
}


export function getDecks() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
      .then(res => JSON.parse(res));
  }
  

export function addCardToDeckHelper(title, card) {
    return getDecks()
        .then( decks => {
            let simpleDeck = decks.decks.find(b => b.title === title);
            simpleDeck.questions.push(card);
            console.log(simpleDeck)
            AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(simpleDeck));
        });
  }