import {AsyncStorage} from 'react-native'

const FLASHCARD_STORAGE_KEY = 'UdaciFlashCard:card'

let decks = {

}

const data=[{key: 'a'}, {key: 'b'}]



export function fetchDecks() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
        return results === null ? setInitialData() : JSON.parse(results)
    });
}


export function setInitialData() {
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
    console.log(data)
    return data;
}
    

export function getDeck(title) {
    return fetchDesk()
        .then(desks => desks[title])
}