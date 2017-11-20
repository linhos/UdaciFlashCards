
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList, FlatList, ListView, TouchableHighlight} from 'react-native'
import {fetchDecksAction} from '../../actions'
import {Text, View, StyleSheet} from 'react-native'
import {fetchDecks} from '../../utils/helpers'
import ListItemComponent from '../ListItemComponent'
import FlashCardNavigation from '../NavigationComponent'


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
            <TouchableHighlight
            onPress={() => this.props.navigation.navigate('DeckIndividual', item)}
                underlayColor='#eeeeee'>
                <View>
                        <Text>
                            {item.title}
                        </Text>
                        <Text>Questions: {item.number}</Text>    
                </View>
            </TouchableHighlight>
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
        console.log(this.props.state.decks)

        return (

            <View style={styles.container}>
                { this.props.state.decks 
                    ?
                    
                        <FlatList
                            data={this.props.state.decks}
                            renderItem={this._renderItem}
                            ItemSeparatorComponent={this._renderSeparator}
                            keyExtractor={this._keyExtractor}
                        />

                    :
                        <Text>No existen tarjetas !!</Text>
                }
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
