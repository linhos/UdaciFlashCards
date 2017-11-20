
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList, FlatList, ListView} from 'react-native'
import {fetchDeckstAction, fetchDecksAction} from '../../actions'
import {Text, View, StyleSheet} from 'react-native'
import {fetchDecks} from '../../utils/helpers'
import ListItemComponent from '../ListItemComponent'

class BaseComponent extends Component
{
    componentDidMount() {
     
        fetchDecks().then(
            (decks) => {
                this.props.dispatch(fetchDecksAction(decks))
            });
    }

    renderItem({ item }) {
        console.log(item)
        return <Text></Text>
    }

    _keyExtractor = (item, index) => item.id;

    render() {
        console.log(this.props.state.decks)

        return (

            <View style={styles.container}>
            { this.props.state.decks 
                ?
                    <FlatList
                        data={this.props.state.decks}
                        renderItem={({item}) => <Text>{item.key}</Text>}
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
