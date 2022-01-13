import { createSlice } from "@reduxjs/toolkit"

const questions = [
  {
    id: 1,
    questionText: "Where do programmers hangout?",
    options: [
      "Outside",
      "At Stack Overflow lounge",
      "Google Academy",
      "At functions",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 2,
    questionText: "What is the most popular programming problem?",
    options: [
      "The correct amount of curly brackets",
      "Wrong class",
      "Lowercase/Uppercase",
      "Missing a Semicolon.",
    ],
    correctAnswerIndex: 3,
  },
  {
    id: 3,
    questionText: "Can you summarize the life of programmers in four words?",
    options: [
      "Learn. Share. Teach. Explore.",
      "Vacation. Sunbathe. Surf. Beach.",
      "Eat. Sleep. Code. Repeat.",
      "Stand. Run. Fall. Repeat.",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 4,
    questionText:
      "As a programmer, where do you see yourself 10 years from now?",
    options: [
      "Sitting in front of a computer, probably programming.",
      "Living on a desert island without technology",
      "Nextdoor to Maks",
      "Still trying to understand Javascript",
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 5,
    questionText: "What is the golden rule in programming?",
    options: [
      "You know nothing Jon Snow",
      "Everything is an array",
      "If it works, don’t touch it",
      "Never use camelCase",
    ],
    correctAnswerIndex: 2,
  },
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
}

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys.
     */

    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        )
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        )
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    },
  },
})
