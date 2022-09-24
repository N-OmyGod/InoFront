export interface ApiResponseMessage<T>{
 isSucces:boolean,
 message:string,
 result?:T
}