let router = require('express').Router();
let UserRepositories = require('../../repositories/userRepositories');
let Errors = require('http-errors');

router.get('/change-password', (req, res) => {
    res.json({
        status: 200,
        needchangepassword: true,
        message: 'Authentication succeeded'
    })
})

router.put('/change-password', async (req, res, next) => {
    let userId = req.body.userId;
    let currentPass = req.body.currentPass;
    let newPass = req.body.newPass;

    currentPass = new Buffer(currentPass).toString('base64');
    newPass = new Buffer(newPass).toString('base64');

    console.log(currentPass)

    UserRepositories.getInstance().findOne({
        where: {
            userid: userId
        }
    })
        .then(info => {
            if (!info) throw Error("User is not found");
            else if (currentPass !== info.dataValues.password) throw Error("Password is wrong");
            else {
                let newuser = { password: newPass };
                info.updateAttributes(newuser);
                res.json({
                    status: 200,
                    message: 'Change password succeeded'
                })
            }
        })
        .catch(err => {
            next({
                status: 400,
                message: err.message
            })
        })

})

module.exports = router;