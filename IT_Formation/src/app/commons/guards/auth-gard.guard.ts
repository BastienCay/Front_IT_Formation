import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const authGardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
    const router = inject(Router);

    if(!auth.isAuthenticated()) {
        router.navigateByUrl('/connection')
        return false
    }
    return true
};
