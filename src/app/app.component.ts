import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto Angular';
  count: WritableSignal<number> = signal(0);

  increment() {
    this.count.update((value) => value + 1);
  }
  dobleCount: Signal<number> = computed(() => this.count() * 2);
}
