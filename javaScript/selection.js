async function selectionSort() {
  const arr = document.querySelectorAll(".bar");
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    arr[i].style.backgroundColor = "#30336b";
    for (let j = i + 1; j < arr.length; j++) {
      arr[j].style.backgroundColor = "#ff7979";
      await wait(delay);

      if (parseInt(arr[j].style.height) < parseInt(arr[min].style.height)) {
        if (min != i) {
          arr[min].style.backgroundColor = "#6c5ce7";
        }
        min = j;
      } else {
        arr[j].style.backgroundColor = "#6c5ce7";
      }
    }
    await wait(delay);
    swapStyle(arr[i], arr[min]);
    arr[min].style.backgroundColor = "#6c5ce7";
    arr[i].style.backgroundColor = "#6ab04c";
  }
}

const selection = document.getElementById("selection");
selection.addEventListener("click", async function () {
  console.log("click");
  disableSortingButtons();
  disablenewArray();
  disablesizeSlider();
  disableplayButton();
  await selectionSort();
  enableSortingButtons();
  enablenewArray();
  enablesizeSlider();
  enableplayButton();
});
