import { Component } from '@angular/core';
import { SnackListComponent } from "../snack-list/snack-list.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-snack',
  imports: [SnackListComponent, FormsModule],
  template: `
  <div class="container">
  <!-- <nav class="navbar navbar-expand  navbar-light bg-light" > -->
  <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">  
    <a class="navbar-brand">{{ pageTitle }}</a>
  </nav>
  <div class="row mb-2">
    <div class="col-4-sm">Filter by:</div>
    <div class="col-4-sm">
      <input type="text" [(ngModel)]="listfilter" />
    </div>
  </div>
  <div>
    <app-snack-list [filteredCriteria]="listfilter"></app-snack-list>
  </div>
</div>
  `
})
export class SnackComponent {
  pageTitle = 'Menu Options';
  listfilter = '';
}
