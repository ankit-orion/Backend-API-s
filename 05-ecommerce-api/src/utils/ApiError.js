class ApiError extends Error{
    constructor(status, message, isOperational = true){
        super(message);
        this.status = status;
        this.message = message;
        this.isOperational = isOperational;
        Error.captureStackTrace(this, this)
    }
}