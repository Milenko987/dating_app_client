import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  model: any = {};
  loggedIn: boolean = false;

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: (user) => (this.loggedIn = !!user),
      error: (eror) => console.log(eror),
    });
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log(response);
        this.router.navigateByUrl('/members');
        this.loggedIn = true;
      },
    });
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
    this.router.navigateByUrl('/');
  }
}
