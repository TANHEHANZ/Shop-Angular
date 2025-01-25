import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-senal',
  imports: [],
  templateUrl: './senal.component.html',
  styleUrl: './senal.component.css',
})
export class SenalComponent {
  count: WritableSignal<number> = signal(0);
  isCoautThen: WritableSignal<boolean> = signal(false);
  increment() {
    this.count.update((value) => value + 1);
  }
  dobleCount: Signal<number> = computed(() => this.count() * 2);
  comparation = computed(() => {
    if (this.isCoautThen()) {
      return `the caunt is ${this.count()}`;
    } else {
      return 'Nothing to see here!';
    }
  });
  toggleIsCoautThen() {
    this.isCoautThen.set(!this.isCoautThen());
  }
  toggleResetCount() {
    this.count.set(0);
  }
  constructor() {
    effect(() => {
      if (this.count() === 10) {
        alert('llego a 10 beby');
        this.isCoautThen.set(true);
      }
    });
  }
}
