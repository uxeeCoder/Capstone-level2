'use strict';

class AsyncDelay {
    constructor(milliseconds) {
      this.milliseconds = milliseconds;
    }
    async delay() {
      return new Promise((resolve) => setTimeout(resolve, this.milliseconds));
    }
  }
  
  const colors = ["#9A989A", "#AEADAE", "#CDCBCD", "#EBEAEB", "#E1E0E1"];
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
  