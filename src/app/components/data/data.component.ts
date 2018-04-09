import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators }  from '@angular/forms';
import { PeticionesService } from '../../services/peticiones.service';
import { Router } from '@angular/router';
import {ObservableMedia} from '@angular/flex-layout';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma: FormGroup;
  formaFichero: FormGroup;
  respuesta:string = "";
  files: FileList;
  respuestaFichero:string = "";
  subido:boolean = false;
  ficheroSubido:boolean = false;

  campoVoy:string = "Primer Campo";
  campo:number = 1;
  constructor(
    private _service:PeticionesService,
    private router: Router
  ) {

    this.forma = new FormGroup(
      {
        'nombre': new FormControl('',
          [Validators.required,
          Validators.minLength(3)]),
        'apellido': new FormControl('',
          [Validators.required,
          Validators.minLength(3)]),
        'correo': new FormControl('',
          [Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
      }
    );

    this.formaFichero = new FormGroup(
      {
        'fichero': new FormControl('',
          [Validators.required])
      }
    );
  }

  ngOnInit() {
  }

  submit(){
    this._service.enviaForm(this.forma.value).subscribe(
      resp => {
        this.respuesta = resp;
      },
      error => {
        this.respuesta = error.error;

      }
    );
  }

  onSubirFichero(userForm:any){
    if(typeof this.files !== "undefined"){
      this._service.postSubirFichero(this.files[0].name, this.files[0]).subscribe(
          result => {
                  this.respuestaFichero = result;
                  this.subido=false;
                  this.formaFichero.reset();
                  this.ficheroSubido = true;
          },
          error => {
            //this.respuestaFichero = error;
          }
      );
    }
    else{
      return;
    }

  }

  getFiles(event) {
   let filestring: string;
   this.files = event.target.files;
   this.subido=true;
 }


 siguiente(){

   this.router.navigate(['siguiente', this.respuesta]);
 }

 siguienteCampo(){
   this.campo = this.campo+1;
   return false;
 }
 anterior(){
   this.campo = this.campo -1;
   return false;
 }

 slider(){
     console.log(document.getElementById("myRange").value);
 }

}
