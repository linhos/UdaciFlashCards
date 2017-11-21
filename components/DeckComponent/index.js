import React, {Component} from 'react'
import {connect} from 'react-redux'
import { View, Text } from 'react-native'
import {getDeckAction} from '../../actions'
import { Card, Button, Divider } from 'react-native-elements';

class DeckComponent extends Component {
    
    componentDidMount() {
        this.props.dispatch(getDeckAction(this.props.navigation.state.params))
    }

    render () {

        return (
            <Card title={this.props.state.decks.deck.title} >
            <Text style={{marginBottom: 10, textAlign: 'center'}}>
            Number of cards in the deck: {this.props.navigation.state.params.questions ? this.props.navigation.state.params.questions.length : 0}
            </Text>
            
            <View>
            <Button
              buttonStyle={{marginBottom: 10}}
              icon={{name: 'add-circle'}}
              title='Add Card to Deck'
              onPress={() => {
                  this.props.navigation.navigate(
                    'addQuestionToDeck',
                  );
                }
              }
            />
            <Divider style={{ backgroundColor: '#ccc' }} />
            <Button
              buttonStyle={{marginBottom: 10}}
              icon={{name: 'question-circle'}}
              title='Start Quiz'
              onPress={() => {
                  this.props.navigation.navigate(
                    'startQuiz',
                  );
                }
              }
            />
          </View>
            
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {state}
}

export default connect(mapStateToProps)(DeckComponent)