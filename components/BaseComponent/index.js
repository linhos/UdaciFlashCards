import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList, FlatList} from 'react-native'
import {fetchDeckstAction} from '../../actions'
import {Text, View, StyleSheet} from 'react-native'
import {fetchDecks} from '../../utils/helpers'


class BaseComponent extends Component
{

    componentDidMount() {
        fetchDecks().then((decks) => {
            this.props.dispatch(fetchDeckstAction(decks))
        })
    }

    render() {
        return (
            <View style={styles.container}>
            <FlatList
              data={this.props.decks}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
    return {
        decks: state,
    }
}

export default connect(mapStateToProps)(BaseComponent)
