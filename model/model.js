const mongoose = require("mongoose")

const DataStore = new mongoose.Schema({

    Fullname:{
        type: String,
        required:true,
        trim:true
    },
    ProfileUrl:{
        type: String,
        required:true,
        trim:true
    },
    Post:{
        type: String,
        required:true,
        trim:true
    },
    Instagram:{
        type: String,
        required:true,
        trim:true
    },
    Github:{
        type: String,
        required:true,
        trim:true
    },
    LinkedIn:{
        type: String,
        required:true,
        trim:true
    },
    Teamname:{
        type: String,
        required:true,
        trim:true
    },
    Year:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model("DataStore", DataStore)