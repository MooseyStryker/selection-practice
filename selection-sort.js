

function selectionSort(arr) {
  // Copy the original array
  const copy = arr.slice()

  // Create an array to store the sorted values
  const sortedArr = []

  // While the array is not empty...
  while (copy.length)
    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let currentMinIndex = 0
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] < copy[currentMinIndex]) {
        currentMinIndex = i
      }

      // Save and remove the value at the min index
      const currentMinValue = copy[currentMinIndex]
      copy.splice(currentMinIndex, 1)

      // Add the min value to the end of the sorted array
      sortedArr.push(currentMinValue)
    }
    return sortedArr
}


function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves

  // Repeat while the unsorted half is not empty:

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1

    // Put the min value at the divider

    // Increment the divider and repeat

}


module.exports = [selectionSort, selectionSortInPlace];
