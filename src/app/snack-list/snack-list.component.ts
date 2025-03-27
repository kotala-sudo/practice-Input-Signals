import { Component, Input, inject , OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackService } from '../snack.service';
import { SnackItem } from '../snack-item';

@Component({
  selector: 'app-snack-list',
  imports: [CommonModule],
  template: `
<div class="card border-secondary">
  <div class="card-header text-primary fw-bold">
    {{ pageTitle }}
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-md-4 col-sm-4 fw-bold">Name</div>
      <div class="col-md-4 col-sm-4 fw-bold">Price</div>
      <div></div>
    </div>
    @for (item of filteredItems; track item){
    <div class="row">
      <div class="col-md-4 col-sm-4">{{ item.name }}</div>
      <div class="col-md-4 col-sm-4">{{ item.price | currency }}</div>
    </div>
    } @empty{
    <div>No matching items found!</div>
    }
  </div>
</div>

  `
})
export class SnackListComponent implements OnInit, OnChanges{
  pageTitle = 'Snacks';
  snackService = inject(SnackService);
  snacks = this.snackService.snacks;

  @Input() filteredCriteria = '';

  filteredItems: SnackItem[] = [];
  
  constructor(){}

  ngOnInit(): void {
      this.filteredItems = this.snackService.snacks;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('input received');
    this.filteredItems = this.snacks.filter((item) =>
      item.name.includes(this.filteredCriteria)
    );
  }
}
