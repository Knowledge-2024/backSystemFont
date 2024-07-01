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

