import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';

import { map } from 'rxjs';
import { AccountService } from '../services/account.service';

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
