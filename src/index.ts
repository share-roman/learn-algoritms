import "./styles.css";

const input = document.getElementById("input");
const output = document.getElementById("output");
let counter = 0;

function createSortedArray(): number[] {
  return new Array(10000).fill(0).map((e, i) => i);
}

function createUnsortedArray(): number[] {
  const arr = [];
  const fromArr = createSortedArray();
  while (fromArr.length > 0) {
    const idx = Math.floor(Math.random() * fromArr.length - 1);
    arr.push(fromArr.splice(idx, 1)[0]);
  }
  return arr;
}

function binarySearch(arr: number[], val: number): number {
  let startIdx = 0;
  let endIdx = arr.length - 1;

  while (endIdx >= startIdx) {
    counter++;
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    if (arr[midIdx] === val) {
      return midIdx;
    }
    if (arr[midIdx] > val) {
      endIdx = midIdx - 1;
    } else {
      startIdx = midIdx + 1;
    }
  }
  return -1;
}

if (output instanceof HTMLOutputElement) {
  output.value = counter.toString();
}
