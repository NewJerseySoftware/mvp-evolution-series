import React from "react";
import { usePrediction } from "../hooks/usePrediction";
import { StatusEnum } from "../types/prediction";

export const PredictionCard: React.FC = () => {
  const { state, commit } = usePrediction();

  return (
    <div>
      <h2>Will Event X Happen?</h2>

      {state.status === StatusEnum.IDLE && (
        <>
          <button onClick={() => commit("YES")}>YES</button>
          <button onClick={() => commit("NO")}>NO</button>
        </>
      )}

      {state.status === StatusEnum.PENDING && (
        <>
          <p>Transaction Pending...</p>
          <p>You selected: {state.choice}</p>
          <p>Tx ID: {state.txId}</p>
        </>
      )}

      {state.status === StatusEnum.WIN && (
        <>
          <p>Confirmed</p>
          <p>You were correct!</p>
        </>
      )}

      {state.status === StatusEnum.LOSE && (
        <>
          <p>Confirmed</p>
          <p>You lost.</p>
        </>
      )}
    </div>
  );
};