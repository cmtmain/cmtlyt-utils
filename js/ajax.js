export function axios({
	method,
	url,
	params,
	data
}) {
	return new Promise((resolve, reject) => {
		method = method.toUpperCase();
		const xhr = new XMLHttpRequest();
		let str = '';
		for (let k in params) str += `${k}=${params[k]}&`;
		str = str.slice(0, -1);
		xhr.open(method, url + '?' + str);
		if (method == 'POST' || method == 'PUT' || method == 'DELETE') {
			xhr.setRequestHeader('Content-type', 'application/json');
			xhr.send(JSON.stringify(data));
		} else xhr.send();
		xhr.responseType = 'json';
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 300) resolve({
				status: xhr.status,
				message: xhr.statusText,
				body: xhr.response
			});
			else reject(new Error('请求失败,失败的状态码为:' + xhr.status));
		}
	});
}
axios.get = function(url, options) {
	return axios(Object.assign(options, {
		method: 'GET',
		url: url
	}));
}
axios.post = function(url, options) {
	return axios(Object.assign(options, {
		method: 'POST',
		url: url
	}));
}
axios.put = function(url, options) {
	return axios(Object.assign(options, {
		method: 'PUT',
		url: url
	}));
}
axios.delete = function(url, options) {
	return axios(Object.assign(options, {
		method: 'DELETE',
		url: url
	}));
}
