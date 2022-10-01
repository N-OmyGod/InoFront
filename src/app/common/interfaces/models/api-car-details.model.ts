export interface ApiCarDetailsModel{
    id: number;
    mark: string;
    model: string;
    year: Date;
    stateNumber: string;
    transmission?: TransmissionType;
    engineType?: EngineType;
    drive?: DriveType;
    mileage: number;
}

export enum TransmissionType{
    Manual = 0,
    Automatic = 1
}

export enum EngineType{
    Petrol = 0,
    Diesel = 1
}

export enum DriveType{
    //Задний привод
    RWD = 0,

    //Передний првиод
    FWD = 1,

    // Полный привод
    AWD = 2,
}