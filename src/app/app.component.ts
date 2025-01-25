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
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, SenalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto Angular';
}
