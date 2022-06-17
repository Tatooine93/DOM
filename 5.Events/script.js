const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  const wrapper = document.querySelector("section:last-child");
  const li = document.createElement("li");
  li.innerHTML = `[${getElapsedTime()}]: Created a new ${e.target.classList[1]} square`;
  wrapper.appendChild(li);
  createSquare(e);
};

const createSquare = (e) => {
  const wrapper = document.querySelector(".displayedsquare-wrapper");
  const square = document.createElement("div");
  square.classList.add("displayedsquare");
  square.classList.add(e.target.classList[1]);
  wrapper.appendChild(square);
};

const actionSquares = document.querySelectorAll(".actionsquare");

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

document.body.addEventListener("keydown", (e) => {
  if (e.keyCode === 32) {
    document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    const wrapper = document.querySelector("section:last-child");
    const li = document.createElement("li");
    li.innerHTML = `[${getElapsedTime()}]: Changed the background color`;
    wrapper.appendChild(li);
  }

  if (e.keyCode === 76) {
    const wrapper = document.querySelector("section:last-child");
    while(wrapper.children.length > 1) {
      wrapper.removeChild(wrapper.lastChild);
    }
  }

  if (e.keyCode === 83) {
    const wrapper = document.querySelector(".displayedsquare-wrapper");
    while(wrapper.children.length > 0) {
      wrapper.removeChild(wrapper.lastChild);
    }
  }
}
);

/* const wrapper = document.querySelector(".displayedsquare-wrapper"); */

/* wrapper.addEventListener("click", (e) => {
  if (e.target.classList.contains("green") === true) {
    alert("Green");
  } else if (e.target.classList.contains("violet") === true) {
    alert("Violet");
  } else if (e.target.classList.contains("orange") === true) {
    alert("Orange");
  }
}); */

document.querySelector(".displayedsquare-wrapper").addEventListener("click", (e) => {
  if (e.target.classList.contains("displayedsquare") === true) {
    alert(`${e.target.classList[1]}`);
  } 
});