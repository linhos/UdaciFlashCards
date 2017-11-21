import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import BaseComponent from './components/BaseComponent/'
import DeckComponent from './components/DeckComponent'
import AddQuestionToDeckComponent from './components/AddQuestionToDeckComponent'
import StartQuizComponent from './components/StartQuizComponent'


import {StackNavigator} from 'react-navigation';

const store = configureStore();


const Home = ({navigation}) => (
      <BaseComponent navigation={navigation} />
)

const DetailDeck = ({navigation}) => (
  <DeckComponent navigation={navigation} />
)

const AddQuestionToDeck = ({navigation}) => (
  <AddQuestionToDeckComponent navigation={navigation} />
)

const StartQuiz = ({navigation}) => (
  <StartQuizComponent navigation={navigation} />
)


const FlashCardNavigation = StackNavigator({
  Home: {
      screen: Home,
      navigationOptions: {
        title: 'Home'
      }
  },
  DetailDeck: {
      screen: DetailDeck,
      navigationOptions: {
        title: 'Deck Detail'
      }
  },
  AddQuestionToDeck: {
    screen: AddQuestionToDeck,
    navigationOptions: {
      title: 'Add Question'
    }
  },
  StartQuiz: {
    screen: StartQuiz,
    navigationOptions: {
      title: 'Start Quiz'
    }
  }
  
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>

          <FlashCardNavigation />
  
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
