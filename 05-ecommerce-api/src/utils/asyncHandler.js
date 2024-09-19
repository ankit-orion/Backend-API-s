const asyncHandler = (requestHandler) => {
    return (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=>{
            next(err)
        })
    }
}
export {asyncHandler}

// here we will be using the asyncHandler to handle the 
// promises in the controllers