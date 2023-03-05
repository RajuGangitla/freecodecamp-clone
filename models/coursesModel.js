import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true,
    }
})

export default mongoose.model('coursesModel', UserSchema)