import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  userName = "";

  onClear() {
    console.log("clearing username")
    this.userName = "";
  }

  isClearClickable() {
    return (this.userName != "");
  }

}
