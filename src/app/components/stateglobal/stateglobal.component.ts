import { Component, inject } from '@angular/core';
import { ComunicationService } from '../../service/comunication.service';

@Component({
  selector: 'app-stateglobal',
  imports: [],
  templateUrl: './stateglobal.component.html',
  styleUrl: './stateglobal.component.css',
})
export class StateglobalComponent {
  // constructor(public estateService: ComunicationService) {}
  public estateService = inject(ComunicationService);
}
