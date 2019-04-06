function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end);

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end)
}

function partition(arr, start, end) {
    let pivotIndex = 0;
    let pivotValue = arr[end];
    for (let i = 0; i < end; i++) {
        if (arr[i] < pivotValue){
            swap(i, pivotIndex);
            pivotIndex++;
        }
    }
}

function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}