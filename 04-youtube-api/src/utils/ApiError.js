class ApiError extends Error{
    constructor(statusCode, message="something went wrong", errors = [], stack = ""){
        // to overwrite we use super
        // super is used to call the constructor of the parent class
        super(message);
        this.statusCode = statusCode;
        this.daa = null;
        this.message = message;
        this.success = false;
        this.errors = errors;
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export {ApiError};