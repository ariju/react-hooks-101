import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EventForm from "./EventForm";
import Events from "./Events";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

console.log({ AppContext });

//useReducer第一引数にreducer第二引数defaultでどうしたいか
//第三引数初期化時の行いたい処理
const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={'Hello, I am aProvider.'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
      </div>
    </AppContext.Provider>
  );
};

export default App;
