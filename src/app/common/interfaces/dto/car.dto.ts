export interface UpdateCarDto{
    mark?: string;
    model?: string;
    year?: number;
    stateNumber?: string;
    transmission?: number;
    engineType?: string | null;
    drive?: string | null;
    mileage?: number;
}