let arraySize = document.getElementById("arr_size");

arraySize.addEventListener("input", function () {
  createNewArray(parseInt(arraySize.value));
});
let array = [];

function createNewArray(barsNo = 50) {
  console.log("Hello");
  deleteChild();
  array = [];
  for (let i = 0; i < barsNo; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }
  //   console.log(array);
  const bars = document.getElementById("bars");
  for (let i = 0; i < barsNo; i++) {
    // console.log("run:" + i);
    const bar = document.createElement("div");

    let h = array[i] * 2;
    // console.log(h);
    bar.style.height = h + "px";
    // console.log(bar.style.height);
    bar.classList.add("bar");
    bar.classList.add("barStyle");
    bar.classList.add("barNo${i}");
    bars.appendChild(bar);
  }
}
function deleteChild() {
  const bars = document.getElementById("bars");
  bars.innerHTML = "";
}
createNewArray();
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
  createNewArray(arraySize.value);
});

function disableSortingButtons() {
  document.getElementById("bubble").disabled = true;
  document.getElementById("selection").disabled = true;
  document.getElementById("insertion").disabled = true;
  document.getElementById("quick").disabled = true;
  document.getElementById("merge").disabled = true;
  let sortButtons = document.querySelectorAll(".sortButton");
  for (let i = 0; i < 5; i++) {
    sortButtons[i].classList.add("disable");
  }
}
function enableSortingButtons() {
  document.getElementById("bubble").disabled = false;
  document.getElementById("selection").disabled = false;
  document.getElementById("insertion").disabled = false;
  document.getElementById("quick").disabled = false;
  document.getElementById("merge").disabled = false;
  let sortButtons = document.querySelectorAll(".sortButton");
  for (let i = 0; i < 5; i++) {
    sortButtons[i].classList.remove("disable");
  }
}
function disablenewArray() {
  document.querySelector(".newArray").disabled = true;
}
function enablenewArray() {
  document.querySelector(".newArray").disabled = false;
}
function disablesizeSlider() {
  document.getElementById("arr_size").disabled = true;
}
function enablesizeSlider() {
  document.getElementById("arr_size").disabled = false;
}
function disableplayButton() {
  let button = document.getElementById("playButton");
  button.disabled = true;
  document.querySelector(".material-icons-outlined").style.color =
    "rgba(0,0,0,0.2)";
  button.classList.add("disable");
}
function enableplayButton() {
  document.getElementById("playButton").disabled = false;
  document.querySelector(".material-icons-outlined").style.color = "#6c5ce7";
  button.classList.remove("disable");
}
function swapStyle(bar1, bar2) {
  let temp = bar1.style.height;
  bar1.style.height = bar2.style.height;
  bar2.style.height = temp;
}

let delay = 260;
let speedSlider = document.getElementById("arr_speed");

speedSlider.addEventListener("input", function () {
  delay = 310 - parseInt(speedSlider.value);
});
function wait(t) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("done"), t);
  });
}

let playButton = document.getElementById("playButton");
playButton.onclick = async function () {
  let dropDown = document.getElementById("dropDown");
  let selectedIndex = dropDown.selectedIndex;
  disableSortingButtons();
  disablenewArray();
  disablesizeSlider();
  disableplayButton();
  if (selectedIndex == 0) await bubbleSort();
  else if (selectedIndex == 1) await selectionSort();
  else if (selectedIndex == 2) await insertionSort();
  else if (selectedIndex == 3) {
    let arr = document.querySelectorAll(".bar");
    let l = 0;
    let r = arr.length - 1;
    await quickSort(arr, l, r);
  } else {
    let arr = document.querySelectorAll(".bar");
    let l = 0;
    let r = parseInt(arr.length) - 1;
    await mergeSort(arr, l, r);
  }
  enableSortingButtons();
  enablenewArray();
  enablesizeSlider();
  enableplayButton();
};
