import { Component } from '@angular/core';
import { SenalComponent } from './components/senal/senal.component';
import { StateglobalComponent } from './components/stateglobal/stateglobal.component';
import { UserComponent } from './components/user/user.component';
import { PadreComponent } from './components/estadosentrecomponentes/padre/padre.component';
import { HijoComponent } from './components/estadosentrecomponentes/hijo/hijo.component';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    SenalComponent,
    StateglobalComponent,
    // UserComponent,
    PadreComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Proyecto Angular';
}
