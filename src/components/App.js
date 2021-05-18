import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EventForm from "./EventForm";
import Events from "./Events";
import AppContext from "../contexts/AppContext";
import reducer from "../reducers";

//useReducer第一引数にreducer第二引数defaultでどうしたいか
//第三引数初期化時の行いたい処理
const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  );
};

export default App;
