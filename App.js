import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import BaseComponent from './components/BaseComponent/'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BaseComponent />
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
