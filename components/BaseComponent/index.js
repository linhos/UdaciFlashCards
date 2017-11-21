
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList, FlatList, ListView, TouchableHighlight, TouchableOpacity} from 'react-native'
import {fetchDecksAction} from '../../actions'
import {Text, View, StyleSheet} from 'react-native'
import {fetchDecks, setInitialData, getDecks} from '../../utils/helpers'
import ListItemComponent from '../ListItemComponent'
import FlashCardNavigation from '../NavigationComponent'

import { List, ListItem } from 'react-native-elements'



class BaseComponent extends Component
{
    componentDidMount() {
    }

    _renderItem = ({item}) => {

        return (
            <View>
                <TouchableOpacity
                onPress={() => this.props.navigation.navigate('DetailDeck', item)}
                    underlayColor='#eeeeee'>
                    
                            <Text>
                                {item.title}
                            </Text>
                            <Text>Questions: {Object.keys(item.questions).length}</Text>    
                    
                </TouchableOpacity>
            </View>
        )
    }

    _keyExtractor = (item, index)  => {
        return index
    }

    _renderSeparator = () => {
        return (
            <View
                style={{
                    flex: 1,
                    height: 1,
                    borderTopWidth: 1,
                    backgroundColor: '#fff'
                }}
            />
        )
    }


    render() {
        console.log(this.props.state.decks.decks)
        return (
            <View>
                <List>
                    {
                        this.props.state.decks.decks.map((item, i) => (
                        
                        <ListItem
                            onPress={() => this.props.navigation.navigate('DetailDeck', item)}
                            key={i}
                            title={item.title}
                            subtitle={Object.keys(item.questions).length}
                            leftIcon={{name: item.icon}}
                        />
                        ))
                    }
                </List>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps)(BaseComponent)
