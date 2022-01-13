import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const questions = useSelector((store) => store.quiz.questions);
  const currentQuestion = useSelector((store) => {
    return store.quiz.questions[store.quiz.currentQuestionIndex];
  });

  return (
    <section className="counter-container">
      <p className="counter-text">
        Question {currentQuestion.id} of {questions.length}
      </p>
    </section>
  );
};
