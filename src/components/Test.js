import React, { Component } from 'react';
import '../style/Test.css';
import Question from './Question';
import Navigation from './Navigation';
import Grade from './Grade';


class Test extends Component {
    constructor() {
        super()
        this.state = {
            currentQuestion: 1,
            currentAnswer: null,
            answered: {},
            questions: []
        }
    }

    saveAnswer = answer => {
        let answered = { ...this.state.answered }
        answered[this.state.currentQuestion] = answer
        this.setState({ answered })
    }


    changeQuestion = updated => {
        if(this.state.answered[this.state.currentQuestion]){
            this.setState({isEmptyAnswer : false})
            this.setState({ currentQuestion: updated })
        }else if(updated < this.state.currentQuestion && updated > 0){
            this.setState({ currentQuestion: updated })
        }else {
            this.setState({isEmptyAnswer : true})
        }
    }

    componentDidMount = () =>{
        let questions = this.getQuestions()
        this.setState({questions})
    }

    getQuestions = () => {
        let questions = require('../data.json')
        return questions
    }

    findCurrentQuestion = () => this.state.questions.find(q => q.number === this.state.currentQuestion)

    render() {
        let questions = this.state.questions
        let question = this.findCurrentQuestion()
        return (
            <div id="test">
                {this.state.currentQuestion > 0  && questions[0] ?
                    <div>
                        <Question
                            saveAnswer={this.saveAnswer}
                            currentAnswer={this.state.answered[this.state.currentQuestion]}
                            question={question}
                            answered={this.state.answered} />
                        <Navigation
                            currentQuestion={this.state.currentQuestion}
                            changeQuestion={this.changeQuestion} />
                        {this.state.isEmptyAnswer ? <div id="message">Please enter your answer</div> : null}
                    </div> :
                    <Grade questions={questions} answered={this.state.answered} />}
            </div>
        );
    }
}

export default Test;