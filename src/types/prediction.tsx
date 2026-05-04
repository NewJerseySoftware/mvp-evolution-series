export enum StatusEnum {
  IDLE = "idle",
  PENDING = "pending",
  WIN = "win",
  LOSE = "lose",
}

export type Choice = "YES" | "NO";

export interface PredictionState {
  status: StatusEnum;
  choice?: Choice;
  txId?: number;
}