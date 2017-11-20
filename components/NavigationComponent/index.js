import React from 'react'
import {StackNavigator} from 'react-navigation';

import BaseComponent from '../../components/BaseComponent'
import DeckComponent from '../DeckComponent'



function Home ({navigation}) {
    return (
        <BaseComponent />
    )
}

function DetailDeck({navitagation}) {
    return (
        <DeckComponent />
    )
}


const FlashCardNavigation = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'All Decks'
        },
    },
    DetailDeck: {
        screen: DetailDeck,
    }
})


export default FlashCardNavigation