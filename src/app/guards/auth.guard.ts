import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SolicitudService } from '../service/solicitud.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuth = inject(SolicitudService);
  const router = inject(Router);
  if (isAuth.isauth()) {
    return true;
  } else {
    router.navigateByUrl('/');
    return false;
  }
};
