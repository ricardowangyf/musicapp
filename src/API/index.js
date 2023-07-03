import requests from './request'


export const reqCategoryList = (params) => requests({ url: 'http://localhost:3721/api/login/account', method: 'POST' ,data:{...params}}) //登录API