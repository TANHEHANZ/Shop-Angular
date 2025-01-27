import { Component } from '@angular/core';
import { SenalComponent } from './components/senal/senal.component';
import { StateglobalComponent } from './components/stateglobal/stateglobal.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [SenalComponent, StateglobalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto Angular';
}
