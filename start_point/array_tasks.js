var arrayTasks = {

	concat: function (arr1, arr2) {
		var arr3 = arr1.concat(arr2);
		return arr3
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd)
		return arr;
	},

	square: function (arr) {
		arr.map(function (n){
			return n**2;
		})
	},

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
