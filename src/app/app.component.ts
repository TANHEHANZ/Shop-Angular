import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
