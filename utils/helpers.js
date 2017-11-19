import {AsyncStorage} from 'react-native'

const FLASHCARD_STORAGE_KEY = 'UdaciFlashCard:card'

export const data = {
    React: {
      title: 'React',
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
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
}


export function fetchDecks() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
        console.log(results)
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