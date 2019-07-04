import {Component} from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  styles: ['p { color: white; }',
      `
    p {
      padding: 20px;
      background-color: deeppink;
      border: 5px solid red;
    }
  `],
  template: `<p>Warning Alert Component</p>`,
})
export class WarningAlertComponent {

}
