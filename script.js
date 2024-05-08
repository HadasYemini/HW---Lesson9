// Question 1

let timeoutId;
let container;
let changeColorBtn;

const changeColor = () => {
  disableChangeColorBtn();
  timeoutId = setTimeout(() => {
    container.style.backgroundColor = "blue";
    enableChangeColorBtn();
  }, 2000);
};

const disableChangeColorBtn = () => {
  changeColorBtn.disabled = true;
  changeColorBtn.classList.add("disable");
};

const enableChangeColorBtn = () => {
  changeColorBtn.disabled = false;
  changeColorBtn.classList.remove("disable");
};

const cancle = () => {
  clearTimeout(timeoutId);
  container.style.backgroundColor = "white";
  enableChangeColorBtn();
};

const createDivs = () => {
  changeColorBtn = document.createElement("button");
  changeColorBtn.classList.add("button");
  changeColorBtn.textContent = "Change Color";
  changeColorBtn.addEventListener("click", changeColor);
  const cancleBtn = document.createElement("button");
  cancleBtn.classList.add("button");
  cancleBtn.textContent = "Cancle";
  cancleBtn.addEventListener("click", cancle);
  container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(changeColorBtn);
  document.body.appendChild(cancleBtn);
  document.body.appendChild(container);
};

createDivs();

// Question 2
const createTimer = () => {
  const timer = document.createElement("div");
  timer.classList.add("timer");
  timer.textContent = 0;
  document.body.append(timer);
  let timeoutId;
  let currentTime = 0;
  return {
    set: (time) => {
      currentTime = time;
      timer.textContent = time;
    },
    start: () => {
      function play() {
        currentTime--;
        if (currentTime <= 0) {
          timer.textContent = "נגמר הזמן";
        } else {
          timer.textContent = currentTime;
          setTimeout(play, 1000);
        }
      }
      setTimeout(play, 1000);
    },
  };
};

const timer = createTimer();
timer.set(15);
timer.start();

// Question 3
const customIndexOf = (str, ch) => {
  try {
    if (typeof str !== "string" || str.length === 0) {
      throw new Error("str invalid parameter");
    }
    if (typeof ch !== "string" || ch.length > 1) {
      throw new Error("ch invalid parameter");
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ch) return i;
    }
    return -1;
  } catch (error) {
    console.warn(error);
  }
};

console.log(customIndexOf("[1,2,3]", ""));

// Question 4

async function fetchAndDisplayUsers() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";

    const response = await fetch(url);
    const users = await response.json();

    // Displaying user names in the browser
    const table = document.createElement("table");
    let row = table.insertRow(0);
    row.className = 'header'
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "User name";
    cell2.innerHTML = "City";
    users.forEach((user) => {
      row = table.insertRow();
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell1.innerHTML = user.name;
      cell2.innerHTML = user.address.city;
    });
    document.body.appendChild(table);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAndDisplayUsers();
