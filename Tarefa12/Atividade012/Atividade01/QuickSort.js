function quickSortIterative(arr) {
  const stack = [];
  stack.push(0);
  stack.push(arr.length - 1);

  while (stack.length > 0) {
    const end = stack.pop();
    const start = stack.pop();

    const pivotIndex = partition(arr, start, end);

    if (pivotIndex - 1 > start) {
      stack.push(start);
      stack.push(pivotIndex - 1);
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1);
      stack.push(end);
    }
  }

  return arr;
}

function quickSortRecursive(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return arr;
  }

  const pivotIndex = partition(arr, start, end);
  quickSortRecursive(arr, start, pivotIndex - 1);
  quickSortRecursive(arr, pivotIndex + 1, end);

  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i, end);
  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

class Test {
  static run() {
    const sizes = [100, 1000, 10000];

    for (const size of sizes) {
      const array = generateRandomArray(size);

      console.log(`Ordenando array de tamanho ${size}:`);
      console.log("Array original:", array.slice());

      const startIterative = performance.now();
      const sortedArrayIterative = quickSortIterative(array.slice());
      const endIterative = performance.now();
      const timeIterative = endIterative - startIterative;

      console.log("Ordenado pelo QuickSort iterativo:", sortedArrayIterative);
      console.log(`Tempo de execução (iterativo): ${timeIterative.toFixed(3)} ms`);

      const startRecursive = performance.now();
      const sortedArrayRecursive = quickSortRecursive(array.slice());
      const endRecursive = performance.now();
      const timeRecursive = endRecursive - startRecursive;

      console.log("Ordenado pelo QuickSort recursivo:", sortedArrayRecursive);
      console.log(`Tempo de execução (recursivo): ${timeRecursive.toFixed(3)} ms`);
      console.log("------------------------------------------");
    }
  }
}

function generateRandomArray(size) {
  const array = [];

  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * size));
  }

  return array;
}

Test.run();
