/*
冒泡排序

如果后一个元素与前一个元素比较，如果比前一个大则交换位置，同时再第二次循环时用这个元素再继续比较，这样能保证再一次循环结束以后，最后一个元素
一定是数组中最大的一个元素，所以内层元素可以减少一次循环
*/ 

function bubbleSort(arr) {
	var len = arr.length;
	for (var i = 0; i < len-1; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr;
}

//举个数组
myArr = [20,18,27,19,35];
//使用函数
bubbleSort(myArr)
