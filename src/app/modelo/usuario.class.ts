export class Usuario{
    constructor(
        public codUsuario:number,
        public dniUsuario:String,
        public NombreUsuario:String,
        public ApellidoUsuario:String,
        public Usuario:String,
        public Contrasena:String,
        public Celular:String,
        public Correo:String,
        public Direccion:String,
    ){}
    get getcodUsuario(){
        return this.codUsuario
    }

    get getnombreUsuario(){
        return this.NombreUsuario
    }
    get getdniUsuario(){
        return this.dniUsuario
    }
    get getApellidoUsuario(){
        return this.ApellidoUsuario
    }
    get getusuariousuario(){
        return this.Usuario
    }
    get getconstrasenaUsuario(){
        return this.Contrasena
    }
    get getcelularUsuario(){
        return this.Celular;
    }
    get getCorreoUsuario(){
        return this.Correo
    }
    get getDireccionUsuario(){
        return this.Direccion
    }
    

        
}
const usuario01=new Usuario(1,"12457896","Josept","Ccoyore","jose123","123","954123678","jose@hotmail.com","Urb. Magisterio segunda etapa")
const usuario02=new Usuario(2,"85742631","Pedro","Picapiedra","pedro123","321","978456632","picapiedra@hotmail.com","Urb. La Florida M-23")
const usuario03=new Usuario(3,"84752633","Pabel","Peña","pabelita123","32111","978484859","pabelita@hotmail.com","Urb. entel Peru M-22")
const usuario04=new Usuario(4,"85742631","Nayely","Picapiedra","pedro123","321","978456632","picapiedra@hotmail.com","Urb. La Florida M-23")
const usuario05=new Usuario(5,"84752633","Jose","Peña","pabelita123","32111","978484859","pabelita@hotmail.com","Urb. entel Peru M-22")
export const usuarios:Usuario[]=[
    usuario01,usuario02,usuario03,usuario04,usuario05
]