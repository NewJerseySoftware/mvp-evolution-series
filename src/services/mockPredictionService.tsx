import { StatusEnum } from "../types/prediction";

export const mockPredictionService = {
  commit: async () => {
    const txId = Math.floor(Math.random() * 100000);
    return { txId };
  },

  resolve: async () => {
    return new Promise<StatusEnum>((resolve) => {
      setTimeout(() => {
        resolve(Math.random() > 0.5 ? StatusEnum.WIN : StatusEnum.LOSE);
      }, 3000);
    });
  },
};