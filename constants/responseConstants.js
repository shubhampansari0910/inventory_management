class Response {

  successResponse(result = null, results = null, message) {
    return {
      success: true,
      errorCode: 0,
      description: message || "SUCCESS",
      info: {
        result,
        results
      }
    }
  }
  
    errorResponse(errorCode, description) {
      return {
        success: false,
        errorCode,
        description,
        info: null
      }
    }
  
    somethingWentWrong(errorCode) {
      return {
        success: false,
        errorCode,
        description: "Something went wrong",
        info: null
      }
    }
}
module.exports = new Response();