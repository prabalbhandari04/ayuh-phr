const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


// use function create date to add existing disease
const existingDisease  = new Schema({
    diabetes : {
        type: Boolean,
        default: false
    },
    highbloodpressure : {
        type: Boolean,
        default: false
    },
    thyroid : {
        type: Boolean,
        default: false
    }
    ,
    asthma : {
        type: Boolean,
        default: false
    }
    ,
    hypertension : {
        type: Boolean,
        default: false
    }
    ,
    aids_hiv : {
        type: Boolean,
        default: false
    }
    
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    contact_no: {
        type: String,
    },
    dob:{
        type:Date,
        // required: [true, "Please enter your date of birth!"]
    },
    gender: {
            type: String,
            enum: ['Male', 'Female', 'Others'],
            // required : [true, "Please enter your gender!"]
    },
    blood: {
        type: String,
        enum: ['A+', 'A-', 'B+','B-','AB+','AB-','O+','O-'],
        // required : [true, "Please enter your gender!"]
    },
    height:{
        type:String
    },
    weight:{
        type:String
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin 
    },
    existing : [existingDisease],
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)