import { Component, input, output, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidireccional',
  imports: [],
  templateUrl: './bidireccional.component.html',
  styleUrl: './bidireccional.component.css',
})
export class BidireccionalComponent implements OnInit {
  data = input();
  informacion = output<string>();
  home = output<boolean>();
  sendinformation() {
    this.informacion.emit('hola desde el componente hijo al padre');
  }
  // public dataBidireccional = inject(informacion.emit('desde el hijo'));
  ngOnInit() {
    this.home.emit(false);
    // this.informacion.emit('se envia de enmediato ');
  }
}
