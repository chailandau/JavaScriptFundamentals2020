const buttons = document.querySelectorAll('[data-target="money"]');

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let button = event.currentTarget;
    button.disabled = "disabled";
    button.textContent = "Submitting...";
  });
});

const name = document.querySelector("#name");
const output = document.querySelector("#name_output");

name.addEventListener("change", (event) => {
  output.textContent = event.target.value;
});

const checkboxes = document.querySelectorAll(".form-check-input");
const checkboxOutput = document.querySelector("#check_output");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    checkboxOutput.textContent = event.target.value;
  });
});

const myForm = document.querySelector("#my_form");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newOutput = "";

  [...event.target.elements].forEach((element) => {
    if (element.value) newOutput = +`${element.value}`;
  });

  const outputDiv = document.querySelector("#output_div");

  outputDiv.textContent = newOutput;
});

const putButtonHere = document.querySelector("#put_button_here");

const createButton = document.createElement("button");

createButton.textContent = "Click me!";

createButton.classList.add("btn", "btn-primary");

putButtonHere.appendChild(createButton);

// Promises
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("this is in the catch " + message);
});

// Observer pattern tutorial
class NumberModel {
  constructor() {
    this.number = 0;
    this.color = "red";
    this.observers = [];
  }
  increment() {
    const colors = ["orange", "red", "green", "blue"];
    this.number++;
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.notifyObservers();
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  notifyObservers() {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

const model = new NumberModel();

class ElementObserver {
  constructor(elementId) {
    this.element = document.querySelector(elementId);
  }
  update(model) {
    this.element.innerHTML = model.number;
    this.element.style.backgroundColor = model.color;
  }
}

const elementObserver1 = new ElementObserver("#elementObserver1");

model.addObserver(elementObserver1);
model.notifyObservers();

const incrementButton = document.querySelector("#increment");

incrementButton.addEventListener("click", () => {
  model.increment();
});

class ConsoleObserver {
  constructor() {}
  update(model) {
    console.log(
      `The number is ${model.number} and the color is ${model.color}`
    );
  }
}

const consoleObserver = new ConsoleObserver();

model.addObserver(consoleObserver);

class HistoryObserver {
  constructor() {
    this.colorHistory = [];
  }
  update(model) {
    this.colorHistory.unshift(model.color);
    let msg = `The most recent 5 colors were: `;
    for (let color = 0; color < 5; color++) {
      if (this.colorHistory[color]) {
        msg += this.colorHistory[color] + ", ";
      }
    }
    console.log(msg);
  }
}

const historyObserver = new HistoryObserver();

model.addObserver(historyObserver);

// Observer tutorial 2

class Observer {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  publish(event, data) {
    this.subscribers
      .filter((subscriber) => subscriber.event === event)
      .forEach((subscriber) => subscriber.action(data));
  }
}

const myObserver = new Observer();

myObserver.subscribe({
  event: "test event 1",
  action: (data) => {
    console.log("Recieved event 1:", data);
  },
});

myObserver.subscribe({
  event: "test event 2",
  action: (data) => {
    console.log("Recieved event 2:", data);
  },
});

// Observer tutorial 3

class Observable {
  constructor() {
    this.observers = [];
  }
  subscribe(change) {
    this.observers.push(change);
  }
  unsubscribe(change) {
    this.observers.filter((subscriber) => subscriber !== change);
  }
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
