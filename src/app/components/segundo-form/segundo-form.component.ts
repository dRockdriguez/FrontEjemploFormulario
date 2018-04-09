import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators }  from '@angular/forms';
import { PeticionesService } from '../../services/peticiones.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segundo-form',
  templateUrl: './segundo-form.component.html',
  styles: []
})
export class SegundoFormComponent {
    parametro: string;
    forma: FormGroup;
    respuesta:string = "";
    respuestaFichero:string = "";
    subido:boolean = false;

    constructor(
      private _service:PeticionesService,
      private router: Router,
      private route: ActivatedRoute
    ) {
      route.params.subscribe( parametros => {
        this.parametro = parametros["parametro"];
      });

      this.forma = new FormGroup(
        {
          'nombre': new FormControl('',
            [Validators.required,
            Validators.minLength(3)]),
            'sexo': new FormControl('', Validators.required)
        }
      );

    }

    ngOnInit() {
    }

    submit(){
      this._service.enviaForm2(this.forma.value).subscribe(
        resp => {
          this.respuesta = resp;
        },
        error => {
          this.respuesta = error.error;

        }
      );
    }


   siguiente(){
     console.log(this.respuesta)
     this.router.navigate(['siguiente', this.respuesta]);
   }

}
