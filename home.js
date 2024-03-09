'use strict';

class AsyncDelay {
    constructor(milliseconds) {
      this.milliseconds = milliseconds;
    }
    async delay() {
      return new Promise((resolve) => setTimeout(resolve, this.milliseconds));
    }
  }
  
  const colors = ["#9DA9A0", "#6C7989", "#6C7989", "#9DA9A0"];
  const time = 1500;
  const body = document.querySelector("body");
  const wait = new AsyncDelay(time);
  
  async function changeBackgroundColor(color) {
    body.style.backgroundColor = color;
    await wait.delay();
  }
  
  async function cycleColors() {
    while (true) {
      for (const color of colors) {
        await changeBackgroundColor(color);
      }
    }
  }
  
  cycleColors();
  