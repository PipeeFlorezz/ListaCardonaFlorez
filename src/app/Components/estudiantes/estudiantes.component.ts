import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public estudiantes: any = [];

  constructor() { 
    this.estudiantes = [
      { 
        sexo: 'Masculino',
        nombre: 'Marcelo Fuentes',
        nacimiento: new Date(1994, 0, 30),
        pais: 'Colombia',
        altura: 1.80,
        colorPiel: 'Moreno',
        hobbie: 'Natacion',
        fortaleza: 'Matematicas'
      },
      {
        sexo: 'Masculino',
        nombre: 'Pedro Cifuentes',
        nacimiento: new Date(1990, 5, 20),
        pais: 'Bolivia',
        altura: 1.70,
        colorPiel: 'Moreno',
        hobbie: 'Natacion',
        fortaleza: 'Matematicas'
      },
      {
        sexo: 'Femenino',
        nombre: 'Lorena Piedrahita',
        nacimiento: new Date(1990, 8, 12),
        pais: 'Colombia',
        altura: 1.65,
        colorPiel: 'Blanca',
        hobbie: 'Natacion',
        fortaleza: 'Quimica'
      },
      {
        sexo: 'Femenino',
        nombre: 'Sara Carmona',
        nacimiento: new Date(1995, 9, 17),
        pais: 'Argentina',
        altura: 1.50,
        colorPiel: 'Blanca',
        hobbie: 'Tennis',
        fortaleza: 'Quimica'
      },
      {
        sexo: 'Masculino',
        nombre: 'Daniel Quiroz',
        nacimiento: new Date(1994, 2, 30),
        pais: 'Argentina',
        altura: 1.50,
        colorPiel: 'Moreno',
        hobbie: 'Natacion',
        fortaleza: 'Manualidades'
      },
      {
        sexo: 'Masculino',
        nombre: 'Carlos Calle',
        nacimiento: new Date(1994, 7, 20),
        pais: 'Colombia',
        altura: 1.70,
        colorPiel: 'Blanco',
        hobbie: 'Futbol',
        fortaleza: 'Matematicas'
      },
      {
        sexo: 'Masculino',
        nombre: 'Kevin Montes',
        nacimiento: new Date(1994, 8, 21),
        pais: 'Colombia',
        altura: 1.60,
        colorPiel: 'Moreno',
        hobbie: 'Baloncesto',
        fortaleza: 'Matematicas'
      },
      {
        sexo: 'Femenino',
        nombre: 'Daniela Perez',
        nacimiento: new Date(1998, 0, 11),
        pais: 'Colombia',
        altura: 1.75,
        colorPiel: 'Morena',
        hobbie: 'Natacion',
        fortaleza: 'Matematicas'
      },
      {
        sexo: 'Femenino',
        nombre: 'Laura Martinez',
        nacimiento: new Date(1994, 3, 30),
        pais: 'Colombia',
        altura: 1.66,
        colorPiel: 'Morena',
        hobbie: 'Baloncesto',
        fortaleza: 'Filosofia'
      },
      {
        sexo: 'Masculino',
        nombre: 'Camilo Garces',
        nacimiento: new Date(1994, 7, 25),
        pais: 'Colombia',
        altura: 1.79,
        colorPiel: 'Blanco',
        hobbie: 'Tennis',
        fortaleza: 'Quimica'
      },
      {
        sexo: 'Masculino',
        nombre: 'Carlos Ardilalule',
        nacimiento: new Date(1994, 0, 27),
        pais: 'Colombia',
        altura: 1.66,
        colorPiel: 'Moreno',
        hobbie: 'Natacion',
        fortaleza: 'Deportes'
      },
      {
        sexo: 'Masculino',
        nombre: 'Santiago Morales',
        nacimiento: new Date(1993, 3, 13),
        pais: 'Peru',
        altura: 2.10,
        colorPiel: 'Blanco',
        hobbie: 'Natacion',
        fortaleza: 'Filosofia'
      }
    ]
  }

  ngOnInit(): void {
    console.log(new Date(30, 1, 1994))
  }

}
