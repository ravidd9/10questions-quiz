import React, { Component } from 'react';
import '../style/Question.css';
import Answer from './Answer';



class Question extends Component {
    constructor() {
        super()
        this.state = {
            marked: null
        }
    }   

    saveAnswer = index => {
        this.setState({ marked: index }, function () {
            this.props.saveAnswer(this.state.marked)
        })
    }


    render() {
        let question = this.props.question
        return (
            <div className="question">
                <div>Question #{question.number}:</div>
                <div>{question.question}</div>
                <ol>
                    {question.answers.map((a, i) => <Answer
                        key={i}
                        index={i + 1}
                        answer={a}
                        marked={this.state.marked}
                        saveAnswer={this.saveAnswer} />)}
                </ol>
            </div>
        );
    }
}

export default Question;