import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'Company name is required'],
    },
    position: {
        type: String,
        required: [true, 'Job Position is required'],
        maxlength: 100
    },
    status: {
        type: String,
        enum: ['pending', 'reject', 'interview'],
        default: 'pending'
    },
    workType: {
        type: String,
        enum: ['full-time', 'work-from-home', 'part-time'],
        default: 'full-time'
    },
    workLocation: {
        type: String,
        required: [true, 'work location is required'],
        default: 'Dhaka'
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true,
    versionKey: false,
}
)
const jobModel = mongoose.model('Job', jobSchema)

export default jobModel;