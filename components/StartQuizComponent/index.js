import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'
import {Card} from 'react-native-elements'

class StartQuizComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            question: [],
            questionNumber:1,
        }
    }

    componentDidMount() {
        let deck = this.props.state.decks.decks.find(b => b.deck_id == this.props.navigation.state.params)
        
        if (this.state.questionNumber === 1) {
            
            this.setState(state => ({
                question: deck.questions[0],
                questionNumber: 1
            }))
        }
            
    }


    render () {
        return (
            <View>
                <Card title="">
                    <Text style={{marginBottom: 10, textAlign: 'center', fontWeight: 'bold'}}>
                        {this.state.question.question}
                    </Text>
                </Card>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {state}
}


export default connect(mapStateToProps)(StartQuizComponent)