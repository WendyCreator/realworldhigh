import {Schema,model,models} from 'mongoose';

const StudentSchema = new Schema({
    firstname:{
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    studentid:{
        type:String,
        required: true,
        unique:true
    },
    studentclass:{
        type:String,
        // required: true
    },
    createdAt:{
        type:Date,
        default:()=>Date.now(),
        immutable:true
    },

    subjects:{
       Mathematics:[Number],
       English:[Number],
       Physics:[Number],
       Chemistry:[Number],
       Biology:[Number]
    }
})

const Student = models.Student || model('Student', StudentSchema)


export default Student
