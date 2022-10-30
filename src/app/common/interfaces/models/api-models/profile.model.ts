export interface ProfileModel{
    firstName: string;
    lastName: string;
    patronymic?: string;
    email: string;
    dateBirth: Date;
    city?: string;
}