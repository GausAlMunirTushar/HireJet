import jobModel from '../models/jobModel.js'
const createJob = async (req, res, next) => {
    const {company, position} = req.body
    if(!company && !position){
        next('Please Provide all fields')
    }
    req.body.createdBy = req.user.userId
    const job = await jobModel.create(req.body)
    res.status(201).json({job})
}

// get job
const getJob = async (req, res, next) => {
    const jobs = await jobModel.find({createdBy:req.user.userId});
    res.status(200).json({
        totalJob: jobs.length,
        jobs,
    })
}


export {
    createJob,
    getJob
}