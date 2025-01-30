import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';
import { BidireccionalComponent } from '../bidireccional/bidireccional.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent, BidireccionalComponent, NgClass],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css',
})
export class PadreComponent {
  dataPadre: string = 'DATOS DEL PADRE';
  mensajeRecibido: string = '';
  collapsed: boolean = true;
  resivirMensaje(mensaje: string) {
    this.mensajeRecibido = mensaje;
  }
  estado(state: boolean) {
    this.collapsed = state;
  }
}
