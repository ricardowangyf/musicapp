const delay = require('mocker-api/lib/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
    'POST /api/login/account': (req, res) => {
        const { password, username } = req.body;
        if (password === '888888' && username === 'admin') {
            return res.json({
                status: 'ok',
                code: 0,
                token: "sdfsdfsdfdsf",
                data: {
                    id: 1,
                    username: 'kenny',
                    sex: 6
                }
            });
        } else {
            return res.status(403).json({
                status: 'error',
                code: 403
            });
        }
    },
}

module.exports = proxy, noProxy, delay;