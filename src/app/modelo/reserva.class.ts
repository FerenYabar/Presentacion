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
const date =new Date(2012,12,10)
    const reserva01=new Reserva(1,date,true,usuarios[0],locales[0])
    const reserva02=new Reserva(2,date,false,usuarios[1],locales[1])
    const reserva03=new Reserva(3,date,false,usuarios[2],locales[2])
    const reserva04=new Reserva(4,date,false,usuarios[3],locales[3])
    const reserva05=new Reserva(5,date,false,usuarios[4],locales[0])
    export const reservas:Reserva[]=[
        reserva01,reserva02,reserva03,reserva04,reserva05
    ] 
