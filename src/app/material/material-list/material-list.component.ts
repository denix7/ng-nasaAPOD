import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';
import { ClassEstudiante } from '../../shared/model/class-estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {
  estudiante1: ClassEstudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;
  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente MaterialList');
    this.estudiante1 = new ClassEstudiante(1, 'Dennis Padilla', 'Cochabamba');
    this.estudiante2 = {
      id: 2,
      nombre: 'Elon Musk',
      ciudad: 'LA'
    };
    this.estudiante3 = {
      id: 3,
      nombre: 'Bill Gates',
      ciudad: 'NY'
    };

    setTimeout(()=>{
      this.estudiante3 = {
        id: 4,
        nombre: 'Juan lopez',
        ciudad: 'Santiago'
      }
    },3000);
  }

}
