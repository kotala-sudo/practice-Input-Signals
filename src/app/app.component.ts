import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SnackComponent } from './snack/snack.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SnackComponent],
  template: `
    <div class="container" >
      <app-snack/>
    </div>
  `,
})
export class AppComponent {
  title = 'practice-Input-Signals';
}
