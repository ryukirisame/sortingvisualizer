async function partition(arr, l, r) {
  await wait(delay);
  let pivot = parseInt(arr[r].style.height);
  arr[r].style.backgroundColor = "#30336b";

  let pindex = l;
  console.log("partiiton");
  for (let i = l; i < r; i++) {
    arr[i].style.backgroundColor = "#f39c12";
    await wait(delay);
    if (parseInt(arr[i].style.height) <= pivot) {
      swapStyle(arr[i], arr[pindex]);

      arr[pindex].style.backgroundColor = "#ff7979";
      if (pindex != i) arr[i].style.backgroundColor = "#833471";

      pindex = pindex + 1;
    } else {
      arr[i].style.backgroundColor = "#833471";
    }
    await wait(delay);
  }
  await wait(delay);

  swapStyle(arr[pindex], arr[r]);

  arr[pindex].style.backgroundColor = "#6ab04c";
  await wait(delay);
  for (let j = l; j <= r; j++) {
    if (j != pindex) arr[j].style.backgroundColor = "#6c5ce7";
  }

  return pindex;
}
async function quickSort(arr, l, r) {
  if (l < r) {
    let pindex = await partition(arr, l, r);
    await quickSort(arr, l, pindex - 1);
    await quickSort(arr, pindex + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < arr.length && r < arr.length) {
      arr[r].style.backgroundColor = "#6ab04c";
      arr[l].style.backgroundColor = "#6ab04c";
    }
  }
}

const quick = document.getElementById("quick");
quick.addEventListener("click", async function () {
  console.log("click");
  disableSortingButtons();
  disablenewArray();
  disablesizeSlider();
  disableplayButton();
  let arr = document.querySelectorAll(".bar");
  let l = 0;
  let r = arr.length - 1;
  await quickSort(arr, l, r);
  enableSortingButtons();
  enablenewArray();
  enablesizeSlider();
  enableplayButton();
});
