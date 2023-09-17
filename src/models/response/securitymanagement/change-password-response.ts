export interface ChangePasswordResponse {
    header: Header
    body: Body
}

export interface Header {
    globalId: string
    isSuccess: boolean
    message: any
}

export interface Body {
    isSuccess: boolean
    message: string
}
