import React, { Component } from 'react';
import '../style/Navigation.css';


class Navigation extends Component {

    nextQuestion = () => {
        if (this.props.currentQuestion < 10) {
            this.props.changeQuestion(this.props.currentQuestion + 1)
        } else {
            this.props.changeQuestion(-1)
        }
    }
    prevQuestion = () => {
        if (this.props.currentQuestion > 1) {
            this.props.changeQuestion(this.props.currentQuestion - 1)
        }
    }

    render() {
        let currentQuestion = this.props.currentQuestion
        return (
            <div id="navigation">
                <button onClick={this.prevQuestion} className={currentQuestion === 1 ? "hide" : null}>Prev</button>
                <button onClick={this.nextQuestion}>{currentQuestion === 10 ? "Done" : "Next"}</button>
            </div>
        );
    }
}

export default Navigation;