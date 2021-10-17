export interface int{
    nombre?:string;
    comentarios?:string;
    fecha?:Date;
    irrenunciables?:number;
    tipo?:string;
    leyes:Leyes[];
}

export interface Leyes{
    nombre?:string;
    url?:string; 
}