import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../service/solicitud.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  constructor(public userServive: SolicitudService) {}
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.userServive.getUser().subscribe({
      next: (data) => {
        this.userServive.user = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
