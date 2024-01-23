
//Generics

type ApiResponse<SomeFormat> = {
    data: SomeFormat,
    isError: boolean
}

const response: ApiResponse<{ name: string, age: number }> = {
    data: {
        name: 'Gaja',
        age: 30
    },
    isError: false
}

//Can be written Above as Below

type UserResponse = ApiResponse<{ name: string, age: number }>
const response1: UserResponse = {
    data: {
        name: 'Gaja',
        age: 30
    },
    isError: false
}