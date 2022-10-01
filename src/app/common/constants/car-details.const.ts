import { DriveType, EngineType, TransmissionType } from "../interfaces/models/api-car-details.model";

export const CarEngineConsts = [
    {
        value: 'Дизель',
        type: EngineType.Diesel
    },
    {
        value: 'Бензин',
        type: EngineType.Petrol
    }
]

export const CarDriveConsts = [
    {
        value: 'Полный привод',
        type: DriveType.AWD
    },
    {
        value: 'Передний привод',
        type: DriveType.FWD
    },
    {
        value: 'Задний привод',
        type: DriveType.RWD
    },
]

export const CarTransmissionConsts = [
    {
        value: 'Автомат',
        type: TransmissionType.Automatic
    },
    {
        value: 'Механика',
        type: TransmissionType.Manual
    }
]

