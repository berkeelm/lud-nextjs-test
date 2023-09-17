export interface GetClientByClientIdResponse {
    header: Header
    body: Body
}

export interface Header {
    globalId: string
    isSuccess: boolean
    message: any
}

export interface Body {
    clientId: string
    clientPassword: string
    scopes: string
}
