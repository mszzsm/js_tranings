let values = [];
let w = 20;

function setup(){
    createCanvas(800, 300);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i++){
        values[i] = random(height);
    }
    quickSort(values, 0, values.length - 1);
}

async function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = await partition(arr, start, end);

    await Promise.all([
    await quickSort(arr, start, index - 1),
    await quickSort(arr, index + 1, end)
 ]);
}

function partition(arr, start, end) {
    let pivotIndex = start;
    let pivotValue = arr[end];
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue){
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

async function swap(arr, a, b){

    await sleep(1000)
        
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}