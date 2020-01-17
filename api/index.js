const requestWithToken = opts => {
	const {header} = opts
	Object.assign(header,{
		userToken: uni.getStorageSync('userToken')
	})
	return uni.request(opts)
	
}

export const fetchOpenid = code => {
	// return requestWithToken({
	// 	url: '',
	// 	data: {
	// 		code
	// 	}
	// })
}

