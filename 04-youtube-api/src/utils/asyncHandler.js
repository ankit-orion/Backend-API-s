const asyncHandler = (requestHandler) => {
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next))
        .catch((err)=>{
            next(err)
        })
    }
}
export {asyncHandler}

// try catch based
// this is a higher order function that will take a function as an argument and return a function
// const asyncHandler = (fn) = async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

// here we are basically getting a function as an arguement adn we
// are executing that function and we are passing the req, res, next to that function
// this approach is used in production code to handle the errors 