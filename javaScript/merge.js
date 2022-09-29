async function Merge(arr, l, m, r) {
  const n1 = m - l + 1;
  const n2 = r - m;
  let a = new Array(n1);
  let b = new Array(n2);
  for (let i = 0; i < n1; i++) {
    await wait(delay);
    arr[l + i].style.backgroundColor = "#ff7979";
    a[i] = arr[l + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await wait(delay);
    arr[m + i + 1].style.backgroundColor = "#833471";
    b[i] = arr[m + i + 1].style.height;
  }
  let i = 0,
    j = 0,
    k = l;
  while (i < n1 && j < n2) {
    await wait(delay);
    if (parseInt(a[i]) <= parseInt(b[j])) {
      if (n1 + n2 == arr.length) {
        arr[k].style.backgroundColor = "#6ab04c";
      } else {
        arr[k].style.backgroundColor = "#01a3a4";
      }
      arr[k].style.height = a[i];
      i++;
    } else {
      if (n1 + n2 == arr.length) {
        arr[k].style.backgroundColor = "#6ab04c";
      } else {
        arr[k].style.backgroundColor = "#01a3a4";
      }
      arr[k].style.height = b[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    await wait(delay);
    if (n1 + n2 == arr.length) {
      arr[k].style.backgroundColor = "#6ab04c";
    } else {
      arr[k].style.backgroundColor = "#01a3a4";
    }
    arr[k].style.height = a[i];
    i++;
    k++;
  }
  while (j < n2) {
    await wait(delay);
    if (n1 + n2 == arr.length) {
      arr[k].style.backgroundColor = "#6ab04c";
    } else {
      arr[k].style.backgroundColor = "#01a3a4";
    }
    arr[k].style.height = b[j];
    j++;
    k++;
  }
}

async function mergeSort(arr, l, r) {
  if (l >= r) return;
  const m = l + Math.floor((r - l) / 2);
  await mergeSort(arr, l, m);
  await mergeSort(arr, m + 1, r);
  await Merge(arr, l, m, r);
}

const merge = document.getElementById("merge");
merge.addEventListener("click", async function () {
  console.log("click");
  disableSortingButtons();
  disablenewArray();
  disablesizeSlider();
  disableplayButton();
  let arr = document.querySelectorAll(".bar");
  let l = 0;
  let r = parseInt(arr.length) - 1;
  await mergeSort(arr, l, r);
  enableSortingButtons();
  enablenewArray();
  enablesizeSlider();
  enableplayButton();
});
