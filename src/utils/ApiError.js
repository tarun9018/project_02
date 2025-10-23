class ApiError extends Error {
    constructor(
        statusCode,
        message="Something went Wrong",
        error=[],
        stack=""
        
    )
    {
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.stack= stack
        this.message=message
        this.success=false
        this.error=this.error
        if(stack){
            this.stack=stack
        }else(
            Error.captureStackTrace(this,this.constructor)
            
        )
    }
}