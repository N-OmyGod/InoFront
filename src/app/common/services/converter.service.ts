import { Injectable } from '@angular/core';
import { CarDriveConsts, CarEngineConsts, CarTransmissionConsts } from '../constants/car-details.const';
import { DriveType, EngineType, TransmissionType } from '../interfaces/models/api-car-details.model';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  transmissions = CarTransmissionConsts;
  drives = CarDriveConsts;
  engines = CarEngineConsts;
  
  constructor() { }

  // convertTransmission(value: string | TransmissionType, toEnum: boolean): number | undefined | TransmissionType{
  //   if (toEnum){
  //     return this.transmissions.find((x) => x.value.toLowerCase() == value.toString().toLocaleLowerCase())?.type
  //   } else {
  //     return this.transmissions.find((x) => x.type == value)?.value
  //   }
  // }

  convertDriveToEnum(value: string): undefined | DriveType{
    return this.drives.find((x) => x.value.toLowerCase() == value.toString().toLocaleLowerCase())?.type
  }

  convertEngineToEnum(value: string ): undefined | EngineType{
    return this.engines.find((x) => x.value.toLowerCase() == value.toString().toLocaleLowerCase())?.type
  }

  convertDriveToString(value: DriveType): string | undefined {
    return this.drives.find((x) => x.type == value)?.value
  }

  convertEngineToString(value: EngineType): string | undefined{
    return this.engines.find((x) => x.type == value)?.value
  }
}
