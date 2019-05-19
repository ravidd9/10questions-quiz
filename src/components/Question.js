import React, { Component } from 'react';
import '../style/Question.css';
import Answer from './Answer';



class Question extends Component {

    getMarked = () => {
        if (this.props.answered[this.props.question.number]) {
            return this.props.answered[this.props.question.number]
        } else {
            return this.props.currentAnswer
        }
    }

    render() {
        let question = this.props.question
        let marked = this.getMarked()
        return (
            <div className="question">
                <h1>Question #{question.number}:</h1>
                <h2>{question.question}</h2>
                {question.answers.map((a, i) => <Answer
                    key={i}
                    index={i + 1}
                    answer={a}
                    marked={marked}
                    saveAnswer={this.props.saveAnswer} />)}
            </div>
        );
    }
}

export default Question;