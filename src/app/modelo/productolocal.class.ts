import { Local, locales } from './local.class';
import { Producto, productos } from './producto.class';

export class ProductoLocal{
    constructor(
        public codProductoLocal:number,
        public precioProductoLocal:number,
        public tieneLocal:Local,
        public tieneProducto:Producto
    ){}
    get getcodProductoLocal(){
        return this.codProductoLocal
    }
    get getprecioproductolocal():number{
        return this.precioProductoLocal
    }
    get getlocalProductoLocal(){
        return this.tieneLocal
    }
    get getproducto(){
        return this.tieneProducto
    }
}
 const productolocal01=new ProductoLocal(1,25,locales[1],productos[0])
 const productolocal02=new ProductoLocal(1,35,locales[2],productos[1])
 const productolocal03=new ProductoLocal(1,45,locales[0],productos[2])
 const productolocal04=new ProductoLocal(1,75,locales[3],productos[3])
 const productolocal05=new ProductoLocal(1,15,locales[1],productos[4])
 const productolocal06=new ProductoLocal(1,20,locales[2],productos[5])
 const productolocal07=new ProductoLocal(1,21,locales[0],productos[6])
 const productolocal08=new ProductoLocal(1,22,locales[1],productos[7])
 const productolocal09=new ProductoLocal(1,23,locales[0],productos[8])


export const productoslocal:ProductoLocal[]=[
    productolocal01,productolocal02,productolocal03,productolocal04,productolocal05,productolocal06,productolocal07,productolocal08,productolocal09
]