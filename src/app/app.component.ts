import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <!-- <nz-form-item>
  <nz-form-control>
    <nz-select nzDropdownClassName="hide-dropdown" nzMode="tags" nzPlaceHolder="Add Keywords" #dropdown>
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

  inputString = "This is a {{sample}} string with {{{multiple2}}} occurrences of curly braces: {{example1}}, {{example2}}.";
  inputString1 = "This is a {{sample3}} string with {{{multiple1}}} occurrences of curly braces: {{example11}}, {{example22}}.";
  inputString2 = "This is a {{sample55}} string with {{{multiple11}}} occurrences of curly braces: {{example155}}, {{example23}}.";
  inputString3 = "This is a {{sample5}} string with {{{multiple5555}}} occurrences of curly braces: {{example15}}, {{example24}}.";

  // Regular expression to match content within double curly braces
  regex = /\{\{\{([^{}]+)\}\}\}|\{\{([^{}]+)\}\}/g;

  // Array to store matches
  matches: string[] = [];




  logVal1() {
    if (!!this.inputString) {
      console.log(this.logVal(this.inputString))
    } else if (!!this.inputString1) (
      console.log(this.logVal(this.inputString1))
    )

    if (!!this.inputString2) {
      console.log(this.logVal(this.inputString2))
    } else if (!!this.inputString3) (
      console.log(this.logVal(this.inputString3))
    )

  }

  logVal(data: string) {
    let match;
    while (
      (match = this.regex.exec(data)) !== null
    ) {
      const content = match[1] || match[2];
      this.matches.push(content);
    }
    console.log(this.matches);

    return this.matches
  }
}
