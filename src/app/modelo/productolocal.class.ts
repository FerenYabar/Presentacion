import { Local, locales } from './local.class';
import { Producto, productos } from './producto.class';

export class ProductoLocal{
    constructor(
        public codProductoLocal:number,
        public precioProductoLocal:number,
        public localProductoLocal:Local,
        public producto:Producto
    ){}
    get getcodProductoLocal(){
        return this.codProductoLocal
    }
    get getprecioproductolocal():number{
        return this.precioProductoLocal
    }
    get getlocalProductoLocal(){
        return this.localProductoLocal
    }
    get getproducto(){
        return this.producto
    }
}
// const productolocal01=new ProductoLocal("PL0001",25,locales[1],productos[0])
// const productolocal02=new ProductoLocal("PL0001",35,locales[2],productos[1])
// const productolocal03=new ProductoLocal("PL0001",45,locales[0],productos[2])
// const productolocal04=new ProductoLocal("PL0001",75,locales[3],productos[3])
// const productolocal05=new ProductoLocal("PL0001",15,locales[1],productos[4])
// const productolocal06=new ProductoLocal("PL0001",20,locales[2],productos[5])
// const productolocal07=new ProductoLocal("PL0001",21,locales[0],productos[6])
// const productolocal08=new ProductoLocal("PL0001",22,locales[1],productos[7])
// const productolocal09=new ProductoLocal("PL0001",23,locales[0],productos[8])


// export const productoslocal:ProductoLocal[]=[
//     productolocal01,productolocal02,productolocal03,productolocal04,productolocal05,productolocal06,productolocal07,productolocal08,productolocal09
// ]