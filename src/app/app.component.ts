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
  title = 'AVNON';

  form: FormControl = new FormControl()
  allowedKeys = [8, 46, 37, 39, 187];
  ngOnInit() {
    this.form.valueChanges.pipe(
      tap((val) => {
        if (val.lastIndexOf('+') === -1 && this.allowedKeys.indexOf(187) === -1) {
          this.allowedKeys.push(187)
        }
      })
    ).subscribe()
  }

  validateNumericInput(event: any) {
    if (this.allowedKeys.indexOf(event.keyCode) === -1 && (event.key < '0' || event.key > '9')) {
      event.preventDefault();
    }
    if (event.key === '+' && this.allowedKeys.indexOf(187) !== -1) {
      this.allowedKeys.splice(this.allowedKeys.indexOf(187), 1)
    }
  }
}
