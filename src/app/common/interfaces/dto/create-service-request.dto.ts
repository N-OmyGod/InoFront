import { VisitReasonTypes } from "../../enums/visit-reason-types.enum";

export interface CreateServiceRequestDto{
    carId: number;
    city: string;
    dealerShipId: number;
    visitReasonId: VisitReasonTypes;
    mileage?: number;
    serviceConsultantId?: number;
    timeSlotId?: number;
    comment?: number;
}
