async function bubbleSort() {
  const arr = document.querySelectorAll(".bar");
  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j].style.backgroundColor = "#ff7979";
      arr[j + 1].style.backgroundColor = "#ff7979";

      if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
        await wait(delay);
        swapStyle(arr[j], arr[j + 1]);
      }
      arr[j].style.backgroundColor = "#6c5ce7";
      arr[j + 1].style.backgroundColor = "#6c5ce7";
    }
    arr[arr.length - 1 - i].style.backgroundColor = "#6ab04c";
  }
  arr[0].style.backgroundColor = "#6ab04c";
}
const bubble = document.getElementById("bubble");
bubble.addEventListener("click", async function () {
  console.log("click");
  disableSortingButtons();
  disablenewArray();
  disablesizeSlider();
  disableplayButton();
  await bubbleSort();
  enableSortingButtons();
  enablenewArray();
  enablesizeSlider();
  enableplayButton();
});
