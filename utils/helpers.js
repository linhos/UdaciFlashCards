import {AsyncStorage} from 'react-native'
import { Notifications, Permissions } from 'expo'

const FLASHCARD_STORAGE_KEY = 'UdaciFlashCard:card'
const FLASHCARD_NOTIFICATION_KEY = 'UdaciFlashCard:notifications'

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
    return fetchDecks()
        .then( decks => {
            let simpleDeck = decks.decks.find(b => b.title === title);
            simpleDeck.questions.push(card);
            AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(simpleDeck));
        });
  }

  export function clearLocalNotification () {
    return AsyncStorage.removeItem(FLASHCARD_NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }
  
  function createNotification () {
    return {
      title: 'Study today!',
      body: "👋 don't forget review your flashcards !",
      ios: {
        sound: true,
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
      }
    }
  }
  
  export function setLocalNotification () {
    AsyncStorage.getItem(FLASHCARD_NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(23)
                tomorrow.setMinutes(0)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(FLASHCARD_NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }
  