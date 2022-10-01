export interface ApiCarModel{
    id: number;
    stateNumber: string;
    model: string;
    mark: string;
    isCompleted?: boolean;
    

    //for table
    active?: boolean;
}