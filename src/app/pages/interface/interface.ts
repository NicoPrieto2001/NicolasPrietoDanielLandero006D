export interface int {
    nombre:        string;
    comentarios?:   string;
    fecha:         Date;
    irrenunciable: string;
    tipo:          string;
    leyes?:        Leye[];
}



export interface Leye {
    nombre: string;
    url:    string;
}


