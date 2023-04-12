/**
 * @jest-environment jsdom
 */

import { increment, decrement, restart } from "./index.js";

describe("Given the increment function", () => {
  describe("When it's called", () => {
    test("Then it should increment counter by 1", () => {
      document.body.innerHTML = "<div><p class='counter'>0</p></div>";
      increment();
      const counterElement = document.getElementsByClassName("counter")[0];
      expect(counterElement.textContent).toBe("1");
    });
  });
});
