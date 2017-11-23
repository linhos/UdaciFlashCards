import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'
import {Card, Button} from 'react-native-elements'

class StartQuizComponent extends Component {


    state={
        deck: [],
        question: [],
        totalQuestions: 0,
        questionNumber:1,
        questionIndex: 0,
        TotalCorrect: 0,
        totalInvalid: 0,
        showAnswer: false,
        complete: false
    }

    componentDidMount() {
      

        let deck = this.props.state.decks.decks.find(b => b.title == this.props.navigation.state.params)

        console.log(deck)

        this.setState(state => ({
            totalQuestions: deck.questions.length,
            deck: deck
        }))

        if (this.state.questionNumber === 1) {
            
            this.setState(state => ({
                question: deck.questions[this.state.questionIndex],
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
        this.nextQuestion()
    }

    isInvalid = () => {
        this.setState({
            totalInvalid: this.state.totalInvalid + 1
        })
        this.nextQuestion()
    }

    nextQuestion = () => {
        
        this.setState(state => ({
            questionNumber: this.state.questionNumber + 1,
            questionIndex: this.state.questionIndex + 1,
            question: this.state.deck.questions[this.state.questionIndex + 1],
            showAnswer: false
        }))
        
    }


    renderQuiz() {
        if (this.state.questionIndex < this.state.totalQuestions) {
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
                            <Text style={{marginBottom: 10, textAlign: 'center'}}>
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
        return (
            <View>
                <Card title="">
                    
                        {this.state.TotalCorrect !== 0 &&
                            <Text style={{marginBottom: 10, textAlign: 'center', fontWeight: 'bold'}}>
                            Good Job: {this.state.TotalCorrect} / {this.state.totalQuestions} answers correctly !!
                            </Text>
                        }
                        {this.state.TotalCorrect === 0 &&
                            <Text style={{marginBottom: 10, textAlign: 'center', fontWeight: 'bold'}}>
                           Ups: {this.state.TotalCorrect} review the flashCard !!
                            </Text>
                        }
                    
                    <View>
                    <Button
                        buttonStyle={{marginBottom: 10, backgroundColor: 'green'}}
                        icon={{name: 'add-circle'}}
                        title='Restart Quiz'
                        onPress={() => {
                            this.props.navigation.navigate(
                                'StartQuiz', this.props.navigation.state.params
                            );
                            }
                        }
                        />
                        <Button
                        buttonStyle={{marginBottom: 10, backgroundColor: 'grey'}}
                        icon={{name: 'add-circle'}}
                        title='Back to Deck'
                        onPress={() => {
                            this.props.navigation.navigate(
                                'DetailDeck', this.state.deck
                            );
                            }
                        }
                        />
                    </View>
                </Card>
            </View>
        )
    }



    render () {
        return (
            <View
                style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
                }}>
            {this.renderQuiz()}
          </View>
        )
    }

}

const mapStateToProps = state => {
    return {state}
}


export default connect(mapStateToProps)(StartQuizComponent)