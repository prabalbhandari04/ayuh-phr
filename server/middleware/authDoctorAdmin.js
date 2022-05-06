const Doctors = require('../models/doctorModel')
const authDoctorAdmin = async (req, res, next) => {
    try {
        const doctor = await Doctors.findOne({_id: req.user.id})
        if(doctor.role !== 1) 
            return res.status(500).json({msg: "Admin resources access denied."})
        next()
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authDoctorAdmin