import { predict } from "./minimalPredict";

test("returns valid result for A", () => {
  const result = predict("A");
  expect(["Win", "Lose"]).toContain(result);
});

test("returns valid result for B", () => {
  const result = predict("B");
  expect(["Win", "Lose"]).toContain(result);
});
