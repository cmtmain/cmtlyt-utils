/**
 * 为el对象绑定事件 
 */
export function addEventListener(el, type, fn, selector) {
	if (typeof el === 'string') el = document.querySelector(el);
	if (!selector) el.addEventListener(type, fn);
	else el.addEventListener(type, function(e) {
		const target = e.target;
		if (target.matches(selector)) fn.call(target, e);
	});
}
/**
 * 事件总线
 */
export const eventBus = {
	callbacks: {}
};
// 绑定事件
eventBus.on = function(type, callback) {
	if (this.callbacks[type]) this.callbacks[type].push(callback);
	else this.callbacks[type] = [callback];
}
// 执行事件
eventBus.emit = function(type, data) {
	if (this.callbacks[type] && this.callbacks[type].length > 0)
		this.callbacks[type].forEach(callback => callback(data));
}
// 取消绑定事件
eventBus.off = function(eventName) {
	if (eventName) delete this.callbacks[eventName];
	else this.callbacks = {};
}
/**
 * 消息订阅与发布 
 */
export const PubSub = {
	id: 1,
	callbacks: {}
};
// 订阅
PubSub.subscribe = function(channel, callback) {
	let token = 'token_' + this.id++;
	if (this.callbacks[channel]) this.callbacks[channel][token] = callback;
	else this.callbacks[channel] = {
		[token]: callback
	};
}
// 发布
PubSub.publish = function(channel, data) {
	if (this.callbacks[channel])
		Object.values(this.callbacks[channel]).forEach(callback => callback(data));
}
// 取消订阅
PubSub.unsubscribe = function(flag) {
	if (!flag) this.callbacks = {};
	else if (typeof flag == 'string') {
		if (flag.indexOf('token_') == 0) {
			let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag));
			if (callbackObj) delete callbackObj[flag];
		} else delete this.callbacks[flag];
	}
}
