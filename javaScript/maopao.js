const arr = [2,1,4,1,3,9,5,2,6,9,16,15]
function maopaoSort(list) {
  let temp;
  for(let i = 0; i< arr.length-1; i ++) {
    for(let j = 0; j< arr.length-1-i; j++) {
      if(arr[j]> arr[j+1]) {
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}

console.log(maopaoSort(arr))