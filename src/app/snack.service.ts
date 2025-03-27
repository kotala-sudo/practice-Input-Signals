
import { Injectable } from '@angular/core';
import { SnackItem } from './snack-item';
import { SNACKS } from './snack-data';

@Injectable({
  providedIn: 'root',
})
export class SnackService {
  snacks:SnackItem[] = SNACKS;
}