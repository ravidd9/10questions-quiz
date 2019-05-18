import React, { Component } from 'react';
import '../style/Test.css';
import Question from './Question';
import Navigation from './Navigation';
import Grade from './Grade';
// import data from '../data.JSON'


class Test extends Component {
    constructor() {
        super()
        this.state = {
            currentQuestion: 1,
            currentAnswer: null,
            answered: {},
            questions: [
                {
                    "number": 1,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                },
                {
                    "number": 2,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                },
                {
                    "number": 3,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                },
                {
                    "number": 4,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                },
                {
                    "number": 5,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                },
                {
                    "number": 6,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                },
                {
                    "number": 7,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                },
                {
                    "number": 8,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                },
                {
                    "number": 9,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                },
                {
                    "number": 10,
                    "question": "1+1",
                    "correct": 4,
                    "answers": ["4", "7", "9", "2"]
                }
            ]
        }
    }

    saveAnswer = answer => {
        let answered = { ...this.state.answered }
        answered[this.state.currentQuestion] = answer
        this.setState({ answered })
    }


    changeQuestion = updated => {
        if(this.state.answered[this.state.currentQuestion]){
            // this.reMark()
            this.setState({isEmptyAnswer : false})
            this.setState({ currentQuestion: updated })
        }else if(updated < this.state.currentQuestion && updated > 0){
            this.setState({ currentQuestion: updated })
        }else {
            this.setState({isEmptyAnswer : true})
        }
    }

    // componentDidMount = () =>{
    //     let data = 
    //     // let questions = this.getQuestions()
    //     this.setState({questions: data})
    // }

    // getQuestions = () => {
    //     let questions = require('../data.JSON')
    //     return questions.data
    // }



    findCurrentQuestion = () => this.state.questions.find(q => q.number === this.state.currentQuestion)

    render() {
        let question = this.findCurrentQuestion()
        return (

            <div id="test">
                {this.state.currentQuestion > 0 ?
                    <div>
                        <Question
                            saveAnswer={this.saveAnswer}
                            currentAnswer={this.state.answered[this.state.currentQuestion]}
                            question={question}
                            answered={this.state.answered} />
                        <Navigation
                            currentQuestion={this.state.currentQuestion}
                            changeQuestion={this.changeQuestion} />
                        {this.state.isEmptyAnswer ? <div>Please enter your answer</div> : null}
                    </div> :
                    <Grade questions={this.state.questions} answered={this.state.answered} />}
            </div>
        );
    }
}

export default Test;