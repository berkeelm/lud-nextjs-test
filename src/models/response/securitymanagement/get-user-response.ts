export interface GetUserResponse {
    header: Header
    body: Body
}

export interface Header {
    globalId: string
    isSuccess: boolean
    message: any
}

export interface Body {
    id: string
    userName: string
    email: string
    phoneNumber: string
}
