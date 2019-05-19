import React, { Component } from 'react';
import '../style/Answer.css';


class Answer extends Component {

    saveAnswer = () => {
        this.props.saveAnswer(this.props.index)
    }

    render() {
        return (
            <div
                className={`answer ${this.props.marked === this.props.index ?
                    "marked" :
                    null}`}
                onClick={this.saveAnswer}>
                {this.props.answer}
            </div>
        );
    }
}

export default Answer;