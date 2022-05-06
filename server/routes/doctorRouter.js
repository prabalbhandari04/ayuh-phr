const router = require('express').Router()
const doctorCtrl = require('../controllers/doctorController')
// const authDoctor = require('../middleware/authDoctor')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const authDoctor = require('../middleware/authDoctor')
const authDocAdmin = require('../middleware/authDoctorAdmin')
router.post('/register', doctorCtrl.register)
router.post('/activation', doctorCtrl.activateEmail)
router.post('/login', doctorCtrl.login)
router.post('/refresh_token', doctorCtrl.getAccessToken)
router.post('/forgot', doctorCtrl.forgotPassword)
router.post('/reset', authDoctor, doctorCtrl.resetPassword)
router.get('/docinfo',authDoctor, doctorCtrl.getDoctorInfo)

router.get('/allinfo', authDoctor, doctorCtrl.getDoctorAllInfo)
router.get('/logout', doctorCtrl.logout)

//yah middle ware auth docter ko auth matera huna sakcha check garnu parcha

router.patch('/update', authDoctor, doctorCtrl.updateDoctor)
router.delete('/delete/:id',  authDocAdmin, doctorCtrl.deleteDoctor)
router.patch('/update_role/:id', authDocAdmin, doctorCtrl.updateDoctorsRole)

// Social Login
router.post('/google_login', doctorCtrl.googleLogin)

router.post('/facebook_login', doctorCtrl.facebookLogin)


module.exports = router