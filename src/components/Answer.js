import React, { Component } from 'react';
import '../style/Answer.css';


class Answer extends Component {

    saveAnswer = () =>{
        this.props.saveAnswer(this.props.index)
    }

    render() {
        return (
            <div className={`answer ${this.props.marked === this.props.index ? "marked": null}`}>
                <li onClick={this.saveAnswer}>{this.props.answer}</li>
            </div>
        );
    }
}

export default Answer;