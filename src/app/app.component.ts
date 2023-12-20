import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <!-- <form>
  <nz-form-item>
    <nz-form-control>
      <input nz-input placeholder="Basic usage" [formControl]="form" (keydown)="validateNumericInput($event)"
        [maxlength]="12" />
    </nz-form-control>
  </nz-form-item>
</form> -->
  <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  var content = document.getElementById("content");
var notification = document.getElementById("notification");
content.innerHTML = "test";

let myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  content.innerHTML = "";
  notification.style.display = "none";
  clearTimeout(myTimeout);
}
function clickBtn() {
  clearTimeout(myTimeout);
  notification.style.display = "block";
  content.innerHTML = "ban code co nhieu loi qua vay";
  myTimeout = setTimeout(myGreeting, 5000);
}

}
