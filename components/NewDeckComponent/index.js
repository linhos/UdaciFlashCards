import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text, TextInput} from 'react-native'
import { Button } from 'react-native-elements'
import {createDeckAction} from '../../actions'


class NewDeckComponent extends Component {

    state = {
        title:''
    }
    
    onSubmit = () => {
        
        const newDeck = {title: this.state.title, questions: [], icon: 'av-timer'};
        this.props.dispatch(createDeckAction(newDeck))

        this.props.navigation.goBack();
    }


    render () {
        return (
            <View>
            <Text>Title Deck:</Text>
            <TextInput
              value={this.state.title}
              autoCorrect={false}
              placeholder="Title"
              onChangeText={(title) => this.setState({title})}
            />
   
            <Button onPress={this.onSubmit} title="submit" />
              
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {state}
}

export default connect (mapStateToProps)(NewDeckComponent)