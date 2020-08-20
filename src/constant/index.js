export const CAPTCHA_ID = '00990c2138e1eb15aa25f860a30cf384'

export const MILL_SEC_PER_SECOND = 1000

export const SEC_PER_MIN = 60

export const VERIFY_METHOD_MAP = {
    phone: 'phone',
    email: 'email'
}

export const ERROR_PAGES = [404, 403, 500, 503]
export const NOT_SIGN_IN_STATUS_CODE = 401

export const ERROR_TYPE_MAP = {
    errno: 'error',
    status: 'error-page'
}

export const ERROR_MAP = {
    verificationNotOvertime: 410015
    // notSignIn: 410000,
    // verificationOverLimit: 410015,
    // userNameUsed: 410006,
    // userNameLogout: 410023,
    // userNameSensitive: 410016,
    // phoneUsed: 410007,
    // phoneLogout: 410024,
    // verificationExpired: 410002,
    // verificationNotMatched: 410003
}
