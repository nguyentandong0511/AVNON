import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <!-- <nz-form-item>
    <nz-form-control>
      <nz-select [formControl]="form" nzDropdownClassName="hide-dropdown" nzMode="tags" nzPlaceHolder="Add Keywords"
        #dropdown (nzBlur)="onBlur()" (nzOnSearch)="onSearch($event)" (keydown.enter)="handleKeyDown($event)"
        [nzTokenSeparators]="[',', ';']">
      </nz-select>
    </nz-form-control>
  </nz-form-item> -->
  <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'AVNON';

  form: FormControl = new FormControl()
  currentSearch: string = '';

  ngOnInit() {
    this.form.valueChanges.pipe(
      tap((val) => {
        console.log(val);

      })
    ).subscribe()
  }

  onBlur() {
    const currList = [];
    if (this.form.value) currList.push(...this.form.value)
    const list = this.currentSearch.split(/[;,]/);
    const newList = list.filter(val => !!val).map(i => {
      return i.trim()
    })
    currList.push(...newList)
    console.log(newList);
    this.form.setValue([...new Set(currList)])
  }

  change(e: any) {
    console.log(e);

  }

  handleKeyDown(event: any) {
    console.log(event);
    if (event.key === 'Enter') {
      // Prevent the default behavior (adding a tag on Enter)
      event.preventDefault();


      // Your custom logic if needed
    }
  }


  onSearch(e: any) {
    console.log(e);
    this.currentSearch = e;
  }
}
