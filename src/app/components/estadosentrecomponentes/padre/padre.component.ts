import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { BidireccionalComponent } from '../bidireccional/bidireccional.component';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent, BidireccionalComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  dataPadre: string = 'DATOS DEL PADRE';
  mensajeRecibido: string = '';
  resivirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }
}
