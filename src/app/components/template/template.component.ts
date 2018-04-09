import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
    `
      .ng-invalid.ng-touched:not(form){
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateComponent implements OnInit {

  usuario: Object = {
    nombre:null,
    apellido:null,
    correo:null,
    pais: "",
    sexo: "",
    acepta: ""
  };

  paises = [
    {
      codigo : "ESP",
      pais: "España"
    },
    {
      codigo: "CRI",
      pais: "Costa rica"
    }
  ];

  sexos = [
    "Mujer", "Hombre"
  ];
  constructor() { }

  ngOnInit() {

  }

  enviar(forma: NgForm){
    console.log(forma);
  }

}
