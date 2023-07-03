const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';
const login = require('./login');


const proxy = {
    ...login,
}
module.exports = (noProxy ? {} : delay(proxy, 10));