'use strict';

class AsyncDelay {
    constructor(milliseconds) {
      this.milliseconds = milliseconds;
    }
    async delay() {
      return new Promise((resolve) => setTimeout(resolve, this.milliseconds));
    }
  }
  
  const colors = ["#5D9FD5", "#3C8CCD", "#2E77B2", "#266192", "#2E77B2"];
  const time = 1000;
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
  