import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from './services/account.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AccountService).currentUser$.pipe(
    map((user) => {
      if (user) {
        return true;
      }
      return false;
    })
  );
};
