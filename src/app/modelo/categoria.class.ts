
export class Categoria{
    constructor(
        public codCategoria:number,
        public nombreCategoria:String
    ){}
    get getnombreCategoria(){
        return this.nombreCategoria
    }
    set setnombrecategoria(nombreCategoria:String){
        this.nombreCategoria=nombreCategoria;
    }
    get getcodCategoria(){
        return this.codCategoria
    }
}
const ron =new Categoria(1,"Ron");
const whisky =new Categoria(2,"Whisky");
const vodka =new Categoria(3,"Vodka");
const pisco =new Categoria(4,"Pisco");
const espirituosas =new Categoria(5,"Espirituosas");
const vino =new Categoria(6,"Vino");
const brandy =new Categoria(7,"Brandy");
const champaña =new Categoria(8,"Champaña");
const ginebra =new Categoria(9,"Ginebra");
const tequila =new Categoria(10,"Tequila");
const aperitivos =new Categoria(11,"Aperitivos");
const cerveza =new Categoria(12,"Cerveza");
const anizados =new Categoria(13,"Anizados");
const gin =new Categoria(14,"Gin");
const coñac=new Categoria(15,"Coñac");
const orujo=new Categoria(16,"Orujo");

export const categorias:Categoria[]=[
    ron,
    whisky,
    vodka,
    pisco,
    espirituosas,
    vino,
    brandy,
    champaña,
    ginebra,
    tequila,
    aperitivos,
    cerveza,
    anizados,
    gin,
    coñac,
    orujo
  ]
 
