export function predict(choice: "A" | "B"): string {
  return choice === "A" ? "Win" : "Lose";
}