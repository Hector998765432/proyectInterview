export interface Usuario{
    nombre: string
    apellido: string
    edad: number
    sexo: boolean
    telefono: string
    status: number
    creado: string
    nacimiento: string
    _id: string
}

export interface GeneralUsuario<T>{
    users: T
}