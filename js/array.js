/**
 * 遍历数组并返回一个新数组
 * @param {Array} arr
 * @param {Function} callback
 */
export function map(arr, callback) {
	let result = [];
	for (let i = 0; i < arr.length; i++) result.push(callback(arr[i], i));
	return result;
}
/**
 * 循环数组执行响应事件
 * @param {Array} arr
 * @param {Function} callback
 * @param {*} initValue
 */
export function reduce(arr, callback, intiValue) {
	let result = initValue;
	for (let i = 0; i < arr.length; i++) result = callback(result, arr[i]);
	return result;
}
/**
 * 返回满足条件的数组
 * @param {Array} arr
 * @param {Function} callback
 */
export function filter(arr, callback) {
	let result = [];
	for (let i = 0; i < arr.length; i++) callback(arr[i], i) && result.push(arr[i]);
	return result;
}
/**
 * 返回满足条件的元素
 * @param {Array} arr
 * @param {Function} callback
 */
export function find(arr, callback) {
	for (let i = 0; i < arr.length; i++)
		if (callback(arr[i], i)) return arr[i];
	return undefined;
}
/**
 * 返回满足条件的元素的下标
 * @param {Array} arr
 * @param {Function} callback
 */
export function findIndex(arr, callback) {
	for (let i = 0; i < arr.length; i++)
		if (callback(arr[i], i)) return i;
	return -1;
}
/**
 * 判断列表中是否每个元素都满足条件
 * @param {Array} arr
 * @param {Function} callback
 */
export function every(arr, callback) {
	for (let i = 0; i < arr.length; i++)
		if (!callback(arr[i], i)) return false;
	return true;
}
/**
 * 判断列表中是否有满足条件的元素
 * @param {Array} arr
 * @param {Function} callback
 */
export function some(arr, callback) {
	for (let i = 0; i < arr.length; i++)
		if (callback(arr[i], i)) return true;
	return false;
}
/**
 * 数组去重
 * @param {Array} arr
 */
export function unique1(arr) {
	const result = [];
	arr.forEach(item => {
		if (result.indexOf(item) == -1) result.push(item)
	});
	return result;
}
/**
 * 数组去重
 * @param {Array} arr
 */
export function unique2(arr) {
	const result = [];
	const obj = {};
	arr.forEach(item => {
		if (!obj[item]) {
			obj[item] = true;
			result.push(item);
		}
	});
	return result;
}
/**
 * 数组去重
 * @param {Array} arr
 */
export function unique3(arr) {
	return [...new Set(arr)];
}
/**
 * 数组合并
 * @param {Array} arr
 * @param {...any} args
 */
export function concat(arr, ...args) {
	const result = [...arr];
	args.forEach(item => {
		if (Array.isArray(item)) result.push(...item);
		else result.push(item);
	});
	return result;
}
/**
 * 数组切片
 * @param {Array} arr
 * @param {Number} begin
 * @param {Number} end
 */
export function slice(arr, begin, end) {
	if (arr.length === 0 || begin >= arr.length) return [];
	begin = begin || 0;
	end = end || arr.length;
	if (end < 1) end = arr.length - end;
	else if (end < begin) end = arr.length;
	const result = [];
	for (let i = begin; i < end; i++) result.push(arr[i]);
	return result;
}
/**
 * 数组扁平化
 * @param {Array} arr
 */
export function flatten1(arr) {
	let result = [];
	arr.forEach(item => {
		if (!Array.isArray(item)) result = result.concat(item);
		else result = result.concat(flatten1(item));
	});
	return result;
}
/**
 * 数组扁平化
 * @param {Array} arr
 */
export function flatten2(arr) {
	let result = [...arr];
	while (result.some(item => Array.isArray(item))) result = [].concat(...result);
	return result;
}
/**
 * 数组分块
 * @param {Array} arr
 * @param {Number} size
 */
export function chunk(arr, size = 1) {
	if (arr.length === 0) return [];
	let result = [];
	let tmp = [];
	arr.forEach(item => {
		if (tmp.length == 0) result.push(tmp);
		tmp.push(item);
		if (tmp.length == size) tmp = [];
	});
	return result;
}
/**
 * 数组差集
 * @param {Array} arr1
 * @param {Array} arr2
 */
export function difference(arr1, arr2 = []) {
	if (arr1.length === 0) return [];
	if (arr2.length === 0) return arr1.slice();
	return arr1.filter(item => !arr2.includes(item));
}
/**
 * 删除数组元素
 * 返回删除元素组成的数组
 * @param {Array} arr
 * @param {...any} args
 */
export function pull(arr, ...args) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		if (args.includes(arr[i])) {
			result.push(arr[i]);
			arr.splice(i--, 1);
		}
	}
	return result;
}
/**
 * 删除数组元素
 * 返回删除元素组成的数组
 * @param {Array} arr
 * @param {Array} values
 */
export function pullAll(arr, values) {
	return pull(arr, ...values);
}
/**
 * 返回前几个数组元素构成的子数组
 * @param {Array} arr
 * @param {Number} size
 */
export function drop(arr, size) {
	return arr.filter((value, index) => index >= size);
}
/**
 * 返回后几个数组元素构成的子数组
 * @param {Array} arr
 * @param {Number} size
 */
export function dropRight(arr, size) {
	return arr.filter((value, index) => index < arr.length - size);
}
