export interface Authenticate {
    username: string
    password: string
    message: string
    field: string
    ticket: string
    extra: {
        soure: string
        email: string
        name: string
    }
}