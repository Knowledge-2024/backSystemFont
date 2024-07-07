import instance from "@/http/index.js";

export const register = data => {
const {
    account,
    password
} = data

// 注册的接口
return instance({
    url:'/api/register',
    method: 'POST',
    data: {
        account,
        password
    }
})
}


export const login = data => {
const {
    account,
    password
} = data

// 注册的接口
return instance({
    url:'/api/login',
    method: 'POST',
    data: {
        account,
        password
    }
})
}

// 忘记密码验证
export const verify = data => {
	const {
		account,
		email
	} = data
	return instance({
		url: '/user/verifyAccountAndEmail',
		method: 'POST',
		data: {
			account,
			email
		}
	})
}

// 密码重置
export const reset = (id,newPassword) => {
	return instance({
		url: '/user/changePasswordInLogin',
		method: 'POST',
		data: {
			id,
			newPassword
		}
	})
}
