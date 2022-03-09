const arr = [2,1,4,1,3,9,5,2,6,9,16,15]
function fastSort(list) {
  if(list.length <=1 || Array.from(new Set(list)).length <= 1){
    return list
  }
  const index = Math.floor(list.length/2)
  const indexItem = list.splice(index, 1)
  let leftArr = []
  let rightArr = []
  list.forEach(item => {
    if(item > indexItem) {
      rightArr.push(item)
    } else {
      leftArr.push(item)
    }
  })
  return fastSort(leftArr).concat(indexItem).concat(fastSort(rightArr))
}
console.log(fastSort(arr))