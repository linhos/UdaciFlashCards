import {AsyncStorage} from 'react-native'


const FLASHCARD_STORAGE_KEY = 'UdaciFlashCard:card'

let data = {
    GameOfTrones: {
        title: 'Game of Thrones',
        questions:[
            {
                question: 'Cuantas temporadas se han estrenado',
                answer: 8
            },
            {
                question: 'Cuantos dragones tiene Daenerys',
                answer: 3
            }
        ]
    },
    Naruto: {
        title: 'Naruto',
        questions:[
            {
                question: 'Cuantas temporadas se han estrenado',
                answer: 12
            },
            {
                question: 'Quien es el hermano de Itachi',
                answer: 'Sasuke'
            }
        ] 
    }
}

export function fetchDesk(){
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
        .then((results) => {
            console.log('desk Data', results)
            return JSON.parse(results)

        })
}

export function getDesk(title) {
    return fetchDesk()
        .then(desks => desks[title])
}