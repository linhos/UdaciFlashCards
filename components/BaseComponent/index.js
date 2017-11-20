
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList, FlatList, ListView, TouchableHighlight, TouchableOpacity} from 'react-native'
import {fetchDecksAction} from '../../actions'
import {Text, View, StyleSheet} from 'react-native'
import {fetchDecks} from '../../utils/helpers'
import ListItemComponent from '../ListItemComponent'
import FlashCardNavigation from '../NavigationComponent'

import { List, ListItem } from 'react-native-elements'



class BaseComponent extends Component
{
    componentDidMount() {
     
        fetchDecks().then(
            (decks) => {
                this.props.dispatch(fetchDecksAction(decks))
            });
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
                            <Text>Questions: {item.number}</Text>    
                    
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

            <View style={styles.container}>
                { this.props.state.decks.decks
                    ?
                    
                        <FlatList
                            data={this.props.state.decks.decks}
                            renderItem={this._renderItem}
                            ItemSeparatorComponent={this._renderSeparator}
                            keyExtractor={this._keyExtractor}
                        />

                    :
                        <Text>No existen tarjetas !!</Text>
                }
                <List>
                    {
                        this.props.state.decks.decks.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
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
