export interface ApiCarDetailsModel{
    id: number;
    mark: string;
    model: string;
    year: number;
    stateNumber: string;
    transmission?: number | TransmissionType;
    engineType?: string | EngineType;
    drive?: string | DriveType;
    mileage: number;
    certificateId: number;
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