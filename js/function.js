/**
 * 用指定的this调用函数
 * @param {Function} Fn
 * @param {Object} obj
 * @param {...any} args
 */
export function call(Fn, obj, ...args) {
	if (obj == undefined || obj == null) obj = globalThis;
	obj.temp = Fn;
	let result = obj.temp(...args);
	delete obj.temp;
	return result;
}
/**
 * 用指定的this调用函数
 * @param {Function} Fn
 * @param {Object} obj
 * @param {Array} args
 */
export function apply(Fn, obj, args) {
	if (obj == undefined || obj == null) obj = globalThis;
	obj.temp = Fn;
	let result = obj.temp(...args);
	delete obj.temp;
	return result;
}
/**
 * 创建指定this的函数当不调用
 * @param {Function} Fn
 * @param {Object} obj
 * @param {...any} args
 */
export function bind(Fn, obj, ...args) {
	return (...args2) => call(Fn, obj, ...args, ...args2);
}
/**
 * 节流
 * @param {Function} callback
 * @param {Number} wait
 */
export function throttle(callback, wait) {
	let start = 0;
	return function(e) {
		let now = Date.now();
		if (now - start >= wait) {
			callback.call(this, e);
			start = now;
		}
	}
}
/**
 * 防抖
 * @param {Function} callback
 * @param {Number} time
 */
export function debounce(callback, time) {
	let timeId = null;
	return function(e) {
		timeId && clearTimeout(timeId);
		timeId = setTimeout(() => {
			callback.call(this, e);
			timeId = null;
		}, time);
	}
}
