import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const Button = ({ item, index }) => {
  // Added selectors
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const answer = useSelector((state) =>
    state.quiz.answers.find((answer) => answer.questionId === question.id)
  );
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
  };

  return (
    <button
      disabled={!!answer}
      type="button"
      className={
        !answer
          ? "default-button"
          : index === question.correctAnswerIndex
          ? "right-button"
          : "wrong-button"
      }
      onClick={() => onAnswerSubmit(question.id, index)}
    >
      {item}
    </button>
  );
};
