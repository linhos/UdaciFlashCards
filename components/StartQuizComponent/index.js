import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'
import {Card, Button} from 'react-native-elements'

class StartQuizComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            question: [],
            questionNumber:1,
            showAnswer: false
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

    showAnswer = () => {
        this.setState({
            showAnswer: true
        })
    }


    render () {
        return (
            <View>
                <Card title="">
                    <Text style={{marginBottom: 10, textAlign: 'center', fontWeight: 'bold'}}>
                        {this.state.question.question}
                    </Text>
                    { this.state.showAnswer && 
                        <View>
                             <Text style={{marginBottom: 10, textAlign: 'center', fontColor: 'green'}}>
                            {this.state.question.answer}
                    </Text>
                        </View>
                    }
                    <View>
                        <Button
                            onPress={this.showAnswer}
                            raised
                            icon={{name: 'cached'}}
                            title='show the answer' />
                    </View>
                </Card>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {state}
}


export default connect(mapStateToProps)(StartQuizComponent)