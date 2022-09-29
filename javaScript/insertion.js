async function insertionSort() {
  const arr = document.querySelectorAll(".bar");
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let h = arr[i].style.height;
    arr[i].style.backgroundColor = "#ff7979";
    await wait(delay);
    while (j >= 0 && parseInt(arr[j].style.height) > parseInt(h)) {
      arr[j].style.backgroundColor = "#ff7979";
      await wait(delay);
      arr[j + 1].style.height = arr[j].style.height;
      await wait(delay);
      for (let k = i; k >= 0; k--) {
        arr[k].style.backgroundColor = "#6ab04c";
      }
      j--;
    }
    await wait(delay);
    arr[j + 1].style.height = h;
    arr[i].style.backgroundColor = "#6ab04c";
  }
}

const insertion = document.getElementById("insertion");
insertion.addEventListener("click", async function () {
  console.log("hii");
  disableSortingButtons();
  disablenewArray();
  disablesizeSlider();
  disableplayButton();
  await insertionSort();
  enableSortingButtons();
  enablenewArray();
  enablesizeSlider();
  enablesizeSlider();
});
