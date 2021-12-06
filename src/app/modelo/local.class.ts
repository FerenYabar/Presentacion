export class Local{
    constructor(
        public codLocal:number,
        public nombreLocal:String,
        public ubicacionLocal:String,
        public rucLocal:String,
        public contrasena:String
    ){
    }
    public get getcodLocal():number{
        return this.codLocal
    }
    public get getnombreLocal():String{
        return this.nombreLocal
    }
    public get getubicacionLocal():String{
        return this.ubicacionLocal
    }
    public get getrucLocal():String{
        return this.rucLocal
    }
    public get getcontrasena():String{
        return this.contrasena
    }
}
const local01=new Local(0,"Borrachos","Urb. Magsiterio segunda etapa","15487236","159")
const local02=new Local(1,"Roncito","Entel Peru C-8","89567214","753")
const local03=new Local(2,"Secala","Urb. La Florida C-9","89778865","999")
const local04=new Local(3,"Tomala","Av. La cultura Tercera etapa","99562311","998")
export const locales:Local[]=[
    local01,local02,local03,local04
]