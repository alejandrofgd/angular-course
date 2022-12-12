import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // decorador que importa propiedades del componente padre
  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzservice.personajes;
  }
  
  constructor( public dbzservice: DbzService) {}
  
}
