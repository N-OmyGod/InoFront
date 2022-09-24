export interface RegistrationDto{
    lastName: string;
    firstName: string;
    patronymic?: string;
    email: string;
    dateBirth: Date;
    city: string;
}