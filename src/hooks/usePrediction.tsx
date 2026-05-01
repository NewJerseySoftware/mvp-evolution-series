import { useState } from "react";
import { Choice, PredictionState, StatusEnum } from "../types/prediction";
import { mockPredictionService } from "../services/mockPredictionService";

export function usePrediction() {
  const [state, setState] = useState<PredictionState>({
    status: StatusEnum.IDLE,
  });

  const commit = async (choice: Choice) => {
    const { txId } = await mockPredictionService.commit();

    setState({
      status: StatusEnum.PENDING,
      choice,
      txId,
    });

    const result = await mockPredictionService.resolve();

    setState((prev) => ({
      ...prev,
      status: result,
    }));
  };

  return { state, commit };
}
