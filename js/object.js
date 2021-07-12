/**
 * 创建实例
 * @param {Function} Fn
 * @param {...any} args
 */
export function newInstance(Fn, ...args) {
	const obj = {};
	const result = Fn.call(obj, ...args);
	obj.__proto__ = Fn.prototype;
	return result instanceof Object ? result : obj;
}
/**
 * 判断原型
 * @param {Object} obj
 * @param {object} Fn
 */
export function myInstanceOf(obj, Fn) {
	let prototype = Fn.prototype;
	let proto = obj.__proto__;
	while (proto) {
		if (prototype == proto) return true;
		proto = proto.__proto__;
	}
	return false;
}
/**
 * 合并对象
 * @param {...Object} objs
 */
export function mergeObject(...objs) {
	let result = {};
	objs.forEach(obj => {
		Object.keys(obj).forEach(key => {
			if (result.hasOwnProperty(key)) result[key] = [].concat(result[key], obj[key]);
			else result[key] = obj[key];
		});
	});
	return result;
}
/**
 * 浅拷贝1
 * @param {*} target
 */
export function clone1(target) {
	if (typeof target == 'object' && target != null) {
		if (Array.isArray(target)) return [...target];
		else return {
			...target
		};
	} else return target;
}
/**
 * 浅拷贝2
 * @param {*} target
 */
export function clone2(target) {
	if (typeof target == 'object' && target != null) {
		const result = Array.isArray(target) ? [] : {};
		for (let key in target)
			if (target.hasOwnProperty(key)) result[key] = target[key];
		return result;
	} else return target;
}
/**
 * 深拷贝1
 * 不能克隆方法
 * 不能克隆循环引用的数据
 * @param {*} target
 */
export function deepClone1(target) {
	let str = JSON.stringify(target);
	return JSON.parse(str);
}
/**
 * 深拷贝2
 * 不能克隆循环引用的数据
 * @param {*} target
 */
export function deepClone2(target) {
	if (typeof target == 'object' && target != null) {
		const result = Array.isArray(target) ? [] : {};
		for (let key in target)
			if (target.hasOwnProperty(key)) result[key] = deepClone2(target[key]);
		return result;
	} else return target;
}
/**
 * 深拷贝3
 * 不能克隆循环引用的数据
 * @param {*} target
 */
export function deepClone3(target) {
	if (typeof target == 'object' && target != null) {
		const result = Array.isArray(target) ? [] : {};
		for (let key in target)
			if (target.hasOwnProperty(key)) result[key] = deepClone2(target[key]);
		return result;
	} else return target;
}
/**
 * 深拷贝4
 * @param {*} target
 */
export function deepClone4(target, map = new Map()) {
	if (typeof target == 'object' && target != null) {
		let cache = map.get(target);
		if (cache) return cache;
		const result = Array.isArray(target) ? [] : {};
		map.set(target, result);
		for (let key in target)
			if (target.hasOwnProperty(key)) result[key] = deepClone2(target[key], map);
		return result;
	} else return target;
}
/**
 * 深拷贝5
 * @param {*} target
 */
export function deepClone5(target, map = new Map()) {
	if (typeof target == 'object' && target != null) {
		let cache = map.get(target);
		if (cache) return cache;
		let isArray = Array.isArray(target);
		const result = isArray ? [] : {};
		map.set(target, result);
		if (isArray) target.forEach((item, index) => result[index] = deepClone5(item, map));
		else Object.keys(target).forEach(key => result[key] = deepClone5(target[key], map));
		return result;
	} else return target;
}
