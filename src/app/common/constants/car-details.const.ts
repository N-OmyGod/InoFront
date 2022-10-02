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
        value: 'Полный',
        type: DriveType.AWD
    },
    {
        value: 'Передний',
        type: DriveType.FWD
    },
    {
        value: 'Задний',
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

