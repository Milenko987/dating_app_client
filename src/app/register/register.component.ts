import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  model: any = {};

  @Output() cancelRegistration = new EventEmitter();

  constructor(private accountService: AccountService) {}

  register() {
    this.accountService.register(this.model).subscribe({
      next: (user) => {
        console.log(user), this.cancel();
      },
      error: (err) => console.log(err),
    });
  }

  cancel() {
    console.log('Canceled');
    this.cancelRegistration.emit(false);
  }
}
