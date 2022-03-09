const arr = [77,2,8,2,4,3,5,6,9,10,44,22,11,33,7]
function fastSort(list) {
    if(list.length <= 1) {
        return list
    }
    const index = Math.floor(list.length/2)
    const indexItem = list.splice(index, 1)
    const leftArray = []
    const rightArray = []
    list.forEach(item => {
        if(indexItem[0] >= item) {
            leftArray.push(item)
        } else {
            rightArray.push(item)
        }
    })
    return fastSort(leftArray).concat(indexItem).concat(fastSort(rightArray))
}
// console.log(fastSort(arr))

function maopao(list) {
    for (var i = 0; i < list.length - 1; i++) {
        for (var j = 0; j < list.length - 1 -i; j++) {
            if(list[j] > list[j+1]) {
                var temp  = arr[j+1]
                list[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return list
}
console.log(maopao(arr))