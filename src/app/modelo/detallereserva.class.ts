import { productos } from './producto.class';
import { ProductoLocal} from './productolocal.class';
import { Reserva} from './reserva.class';
export class DetalleReserva{
    constructor(
        public codDetalleReserva:number,
        public cantidadDetalleReserva:number,
        public productolocalDetalleReserva:ProductoLocal,
        public reservaDetalleReserva:Reserva
    ){

    }
    get getcodDetalleReserva(){
        return this.codDetalleReserva
    }

    get getReservas(){
        return this.reservaDetalleReserva
    }
    get getproductoDetalleReserva(){
        return this.productolocalDetalleReserva
    }
    get getcantiaddDEtalleReserva(){
        return this.cantidadDetalleReserva
    }

}

