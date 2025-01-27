import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComunicationService {
  stateGlobal: string =
    'Inicializado desde el estado global que es el servicio';
  constructor() {
    this.stateGlobal;
  }
  change = (data: string): string => {
    return (this.stateGlobal = data);
  };
}
