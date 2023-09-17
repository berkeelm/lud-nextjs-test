// export interface CreateClientRequest {
//     clientId: string
//     apiScopes: string[]
// }

export type CreateClientRequest = {
    clientId: string | any;
    clientSecret: string | any;
    apiScopes: string[] | any;
}
