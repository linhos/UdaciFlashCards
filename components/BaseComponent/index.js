
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList, FlatList} from 'react-native'
import {fetchDeckstAction} from '../../actions'
import {Text, View, StyleSheet} from 'react-native'
import {fetchDecks, setInitialData} from '../../utils/helpers'


class BaseComponent extends Component
{
    state = {
        decks: []
      };

    componentDidMount() {
        
        fetchDecks().then(results => {
            this.setState({
                decks: results
            });
        });
    }

    render() {
        console.log(this.state)
        return (
            <View style={styles.container}>
            <FlatList
              data={this.state.decks}
              renderItem={({item}) => <Text style={styles.item}>{item.decks}</Text>}
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

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps)(BaseComponent)
