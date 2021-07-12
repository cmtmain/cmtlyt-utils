/**
 * 字符串倒序
 * @param {String} str
 */
export function reversString(str) {
	return [...str].reverse().join('');
}
/**
 * 字符串是否回文
 * @param {String} str
 */
export function palindrome(str) {
	return reversString(str) == str;
}
/**
 * 截取字符串
 * @param {String} str
 * @param {Number} num
 */
export function truncate(str, num) {
	return str.slice(0, size) + '...';
}
