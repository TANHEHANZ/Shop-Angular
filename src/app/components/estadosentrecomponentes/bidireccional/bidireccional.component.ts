import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-bidireccional',
  imports: [],
  templateUrl: './bidireccional.component.html',
  styleUrl: './bidireccional.component.css',
})
export class BidireccionalComponent {
  data = input();
  informacion = output<string>();
  sendinformation() {
    this.informacion.emit('hola desde el componente hijo al padre');
  }
}
