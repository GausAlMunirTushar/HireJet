// error middleware
const errorMiddleware = (err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        success: false,
        error: err,
    })
}

export default errorMiddleware