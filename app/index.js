/**
 * @jest-environment jsdom
 */

let counter = 0;

const increment = () => {
  if (counter < 20) {
    counter++;
    const counterElement = document.getElementsByClassName("counter")[0];
    counterElement.textContent = counter;
  }
};

const decrement = () => {
  if (counter > 0) {
    counter--;
    const counterElement = document.getElementsByClassName("counter")[0];
    counterElement.textContent = counter;
  }
};

const restart = () => {
  counter = 0;
  const counterElement = document.getElementsByClassName("counter")[0];
  counterElement.textContent = counter;
};

export { increment, decrement, restart };
