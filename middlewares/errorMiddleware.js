// error middleware
const errorMiddleware = (err, req, res, next) => {
    console.log(err)
    const defaultErrors = {
        statusCode : 500,
        message: err
    }

    // missing fields error
    if(err.name === 'ValidationError') {
        defaultErrors.statusCode = 400
        defaultErrors.message = Object.values(err.errors).map(item => item.message).join(',')
    }
    res.status(defaultErrors.statusCode).json({
        message: defaultErrors.message
    })
}

/* res.status(500).json({
    success: false,
    error: err,
}) */
export default errorMiddleware