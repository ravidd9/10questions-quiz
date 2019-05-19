import React, { Component } from 'react';
import '../style/Grade.css';


class Grade extends Component {

    getGrade = () =>{
        let grade = 0
        console.log(this.props.answered)
        this.props.questions.forEach(q => {
            console.log("question number " + q.number)
            console.log("correct anwer: " + q.correct)
            console.log("answered: " + this.props.answered[q.number])
            if(q.correct === this.props.answered[q.number]){
                grade += 10
            }
        })
        return grade
    }

    render() {
        return (
            <div id="grade">
                Your grade is: {this.getGrade()}
            </div>
        );
    }
}

export default Grade;