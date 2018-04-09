import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeticionesService {

  constructor(
    private _http: HttpClient
  ) {
    /*this.refreshToken().subscribe(
      resp => {
        console.log(resp);
      }
    );*/
  }
  token:string = "Bearer 8ee430da-53d8-3aa6-9d56-b8fd356f150c";
  //token:string = "Basic eklSMktvZUZtUmhEdWwwVktzMVJhcmFVWWNVYTpKSUYwdVhMUWZEOHc3ZTVNRXFpT0lHaVdtdkFh";

  private getHeaders():HttpHeaders{
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type':'application/json',
      'Authorization': this.token
    });
    //console.log(headers)
    return headers;
  }
  enviaForm(valores){
    /*return this._http.post("http://localhost:8080/hola/usuario", valores,  { headers: this.getHeaders() }).map(
      resp => {
        return resp;
      }
    );*/
    console.log("ASDF")
    console.log("https://10.0.190.64:8243/swaggerPost/1.0.0/hola/usuario")
    console.log(JSON.stringify(this.getHeaders()))
    return this._http.post("https://10.0.190.64:8243/swaggerPost/1.0.0/hola/usuario", valores,  { headers: this.getHeaders() }).map(
      (resp:any) => {
        //console.log(JSON.parse(resp).mensaje)
        //console.log(JSON.parse(resp).mensaje)
        return JSON.parse(resp).mensaje;
      }
    );

  }

  postSubirFichero(nombre:string, fichero){
      return this._http.post("https://10.0.190.64:8243/swaggerPost/1.0.0/hola/subirFichero?fileName="+nombre, fichero).map(
        (resp:any)=>{
            return JSON.parse(resp).mensaje;
        }
      );
    }

  enviaForm2(valores){
      /*return this._http.post("http://localhost:8080/hola/usuario", valores,  { headers: this.getHeaders() }).map(
        resp => {
          return resp;
        }
      );*/
      return this._http.post("https://10.0.190.64:8243/swaggerPost/1.0.0/hola/form2", valores,  { headers: this.getHeaders() }).map(
        (resp:any) => {
          //console.log(JSON.parse(resp).mensaje)
          //console.log(JSON.parse(resp).mensaje)
          return JSON.parse(resp).mensaje;
        }
      );

    }



    refreshToken(){
      let body = new URLSearchParams();
      body.set('grant_type', 'password');
      body.set('username', 'admin');
      body.set('password', 'admin');

        return this._http.post("https://10.0.190.64:8243/token",
        body
        ,  { headers: this.getHeaders() }).map(
          (resp:any) => {
            console.log("RESP")
            //console.log(JSON.parse(resp).mensaje)
            console.log(resp)
          },
          error=>{
            console.log("ERR")
            console.log(error)
          }
        );

      }
}
