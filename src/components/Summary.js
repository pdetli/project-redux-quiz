import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { quiz } from "../reducers/quiz"

//
export const Summary = () => {
  const dispatch = useDispatch()
  const answers = useSelector((state) => state.quiz.answers)

  return (
    <div className="summary-container">
      <h1>SUMMARY</h1>
      {answers.map((answer) => (
        <div className="answer-container" key={answer.question.questionText}>
          <p className="question">{answer.question.questionText}</p>
          <span className="user-answer">
            {answer.answer}
            {answer.isCorrect ? "✔️" : "❌"}
          </span>

          <p className="correct-answer">
            {answer.isCorrect ? "" : "Correct answer: "}
            {!answer.isCorrect
              ? answer.question.options[answer.question.correctAnswerIndex]
              : "CORRECT"}
          </p>
        </div>
      ))}
      <button
        className="re-start-button"
        onClick={() => dispatch(quiz.actions.restart())}
      >
        RESTART
      </button>
    </div>
  )
}
