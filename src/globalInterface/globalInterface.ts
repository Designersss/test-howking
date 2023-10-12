export interface ISliderConfiguration{
    id: number
    option: number
    price: number
}

export interface ICheckConfiguration{
    id: number
    img: number
    price: number
    active: boolean
}

export interface IAmount {
    minutesAmount: number
    smsAmount: number
    internetsAmount: number
    servicesAmount: number
    phone: string,
    operator: string
}