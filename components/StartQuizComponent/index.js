import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'
import {Card, Button} from 'react-native-elements'

class StartQuizComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            question: [],
            totalQuestions: 0,
            questionNumber:1,
            TotalCorrect: 0,
            totalInvalid: 0,
            showAnswer: false
        }
    }

    componentDidMount() {
      

        let deck = this.props.state.decks.decks.find(b => b.deck_id == this.props.navigation.state.params)

        this.setState(state => ({
            totalQuestions: deck.questions.length
        }))

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

    isCorrect = () => {
        this.setState({
            TotalCorrect: this.state.TotalCorrect + 1
        })
    }

    isInvalid = () => {
        this.setState({
            totalInvalid: this.state.totalInvalid + 1
        })
    }




    render () {
        return (
            <View>
                <Card title="">
                    <Text style={{marginBottom: 10, textAlign: 'center', fontWeight: 'bold'}}>
                        {this.state.question.question} 
                    </Text>
                    <Text style={{marginBottom: 10, textAlign: 'right', fontWeight: 'bold'}}>
                        {this.state.questionNumber} of {this.state.totalQuestions} 
                    </Text>
                    { this.state.showAnswer && 
                        <View>
                            <Text style={{marginBottom: 10, textAlign: 'center', fontColor: 'green'}}>
                                {this.state.question.answer}
                            </Text>
                        </View>
                    }
                    { this.state.showAnswer && 
                        <View>
                            <View>
                                <Button
                                    buttonStyle={{marginBottom: 10}}
                                    onPress={this.isCorrect}
                                    backgroundColor= 'green'
                                    raised
                                    icon={{name: 'code'}}
                                    title='Corrent' />
                                
                                <Button
                                    buttonStyle={{marginBottom: 10}}
                                    onPress={this.isInvalid}
                                    backgroundColor='red'
                                    raised
                                    icon={{name: 'code'}}
                                    title='Invalid' />
                            </View>
                        </View>
                    }
                    { !this.state.showAnswer && 
                        <View>
                            <Button
                                onPress={this.showAnswer}
                                raised
                                icon={{name: 'cached'}}
                                title='show the answer' />
                        </View>
                    }
                </Card>
            </View>
        )
    }

}

const mapStateToProps = state => {
    return {state}
}


export default connect(mapStateToProps)(StartQuizComponent)