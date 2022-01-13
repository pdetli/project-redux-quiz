import React, { useState } from "react";

import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { quiz } from "reducers/quiz";
import StartPage from "./components/StartPage";

import { CurrentQuestion } from "components/CurrentQuestion";

const reducer = combineReducers({
  quiz: quiz.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  const [start, setStart] = useState(false);
  return (
    <Provider store={store}>
      {!start ? <StartPage start={setStart} /> : <CurrentQuestion />}
    </Provider>
  );
};
