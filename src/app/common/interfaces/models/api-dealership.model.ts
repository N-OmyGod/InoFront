export interface ApiDealershipModel{
    id: number;
    brand: string;
    name: string;
    address: string;
    operatorNum: string;
    openingTime: Date;
    closingTime: Date;
    imgUrl?: string;
}