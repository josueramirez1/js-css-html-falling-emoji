const body = document.querySelector("body");

class Emoji {
  constructor(color, position, speed) {
    this.color = color;
    this.position = position;
    this.speed = speed;
  }

  draw() {
    let timerId;
    let top = 0;

    // emojiShape
    const emojiElement = document.createElement("div");
    // left eye
    const leftEye = document.createElement("div");
    leftEye.classList.add("eye");
    leftEye.classList.add("left");

    // right eye
    const rightEye = document.createElement("div");
    rightEye.classList.add("eye");
    rightEye.classList.add("right");
    // mouth
    const mouth = document.createElement("div");
    mouth.classList.add("mouth");

    emojiElement.append(leftEye, rightEye, mouth);

    emojiElement.classList.add("emoji");
    emojiElement.style.setProperty("--c", this.color);
    emojiElement.style.left = this.position + "px";
    emojiElement.style.speed = this.speed;
    body.append(emojiElement);

    function move() {
      emojiElement.style.top = top + "px";
      top += 10;
      if (top >= window.innerHeight) {
        clearInterval(timerId);
        emojiElement.remove();
      }
    }
    timerId = setInterval(move, this.speed);
  }
}

function addEmoji() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomLeft = Math.floor(Math.random() * window.innerWidth);
  const randomSpeed = Math.floor(Math.random() * 500);

  const newEmoji = new Emoji(randomColor, randomLeft, randomSpeed);
  newEmoji.draw();
}

setInterval(addEmoji, 100);
