import { Local, locales } from './local.class';
import { Usuario, usuarios } from "./usuario.class";

export class Reserva{
    constructor(
        public codReserva:number,
        public fechaReserva:Date,
        public estadoReserva:boolean,
        public usuarioReserva:Usuario,
        public localReserva:Local
    ){

    }
    get getfechaReserva(){
        return this.fechaReserva
    }
    get getusuarioreserva(){
        return this.usuarioReserva
    }
    get getestadoreserva(){
        return this.estadoReserva
    }
    get getcodReserva():number{
        return this.codReserva
    }
    get getlocalReserva(){
        return this.localReserva
    }
    

}
