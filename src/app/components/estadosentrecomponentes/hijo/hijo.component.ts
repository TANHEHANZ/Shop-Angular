import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  data = input.required();
}
