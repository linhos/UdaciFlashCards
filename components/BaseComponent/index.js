
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList, FlatList, ListView, TouchableHighlight, TouchableOpacity} from 'react-native'
import {fetchDecksAction} from '../../actions'
import {Text, View, StyleSheet} from 'react-native'
import {fetchDecks, setInitialData, getDecks} from '../../utils/helpers'
import FlashCardNavigation from '../NavigationComponent'
import {Card, Button} from 'react-native-elements'
import { List, ListItem } from 'react-native-elements'



class BaseComponent extends Component
{

    render() {
        console.log(this.props.state.decks)
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
                <Button
                    buttonStyle={{marginTop: 20, marginBottom: 10, backgroundColor: 'green'}}
                    icon={{name: 'add-circle'}}
                    title='New Deck'
                    onPress={() => {
                        this.props.navigation.navigate(
                            'NewDeck',
                        );
                        }
                    }
                />

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
