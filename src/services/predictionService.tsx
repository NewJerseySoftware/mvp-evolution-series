import { Choice, PredictionState } from "../types/prediction";

export interface PredictionService {
  commit(choice: Choice): Promise<PredictionState>;
  getStatus(id: string): Promise<PredictionState>;
}