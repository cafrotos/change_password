let router = require('express').Router();
let errors = require('http-errors');
let db = require('../models')
let AccessTokenRepositories = require('../repositories/access_tokenRepositories')

router.use('/change-password', async (req, res, next) => {
    let ACCESS_TOKEN = req.header("ACCESS_TOKEN");

    let TokenInfo = await AccessTokenRepositories.getInstance().findOne({
        where: {
            access_token: ACCESS_TOKEN
        }
    });
    if (!TokenInfo) {
        let err = new errors(404, "Can not access!");
        next(err);
    }

    if (!req.body.userId || req.body.userId == TokenInfo.dataValues.userid) {
        next();
    }
    else {
        let err = new errors(404, "Can not access!");
        next(err);
    }
})

router.get('/change-password', require('./api/change_password'));
router.put('/change-password', require('./api/change_password'))

module.exports = router;