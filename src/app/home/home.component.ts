import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  registerMode: boolean = false;

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancleRegistartion(event: boolean) {
    this.registerMode = event;
  }
}
