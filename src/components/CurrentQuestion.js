import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { quiz } from "../reducers/quiz"

import { Summary } from "./Summary"
import { Button } from "./Button"
import { BackgroundVideo } from "./BackgroundVideo"
import { Counter } from "./Counter"

export const CurrentQuestion = () => {
  const dispatch = useDispatch()
  // Selectors
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  )
  const quizOver = useSelector((state) => state.quiz.quizOver)

  // if not all questions are answered dispatch goToNextQuestion
  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion({}))
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (!quizOver) {
    return (
      <>
        <main className="main-container">
          <BackgroundVideo />
          <div className="wrapper">
            <h2>{question.questionText}</h2>
            {question.options.map((item, index) => (
              <div className="button-container" key={index}>
                <img className="pill-image" src="/pill.png" alt="icon" />
                <Button index={index} item={item}></Button>
              </div>
            ))}

            <button
              className="re-start-button"
              onClick={handleClick}
              disabled={!answer}
            >
              NEXT QUESTION
            </button>

            <Counter />
          </div>
        </main>
      </>
    )
  }
  return (
    <div>
      <BackgroundVideo />
      <Summary />
    </div>
  )
}
