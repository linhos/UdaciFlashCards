import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TextInput} from 'react-native'
import { Button } from 'react-native-elements'
import {addCardToDeckHelper} from '../../utils/helpers'
import {addCardAction} from '../../actions'


class AddQuestionToDeckComponent extends Component {

    state = {
        question: '',
        answer: '',
      }

      onSubmit = () => {
        
        const { question, answer } = this.state;

        const card = {
            question,
            answer
        }

        addCardToDeckHelper('React', card)

        addCardAction('React', card)

        this.props.navigation.goBack();

    }


    render () {
        return (
            <View>
            <Text>Question:</Text>
            <TextInput
              value={this.state.question}
              autoCorrect={false}
              placeholder="Question"
              onChangeText={(question) => this.setState({question})}
            />
    
            <Text>Answer:</Text>
            <TextInput
              value={this.state.answer}
              autoCorrect={false}
              placeholder="Answer"
              onChangeText={(answer) => this.setState({answer})}
            />
            <Button onPress={this.onSubmit} title="submit" />
              
            </View>
        )
    }

}

export default connect()(AddQuestionToDeckComponent)