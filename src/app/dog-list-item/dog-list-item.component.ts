import { Component, Input } from '@angular/core';
import { Dog } from '../models/dog';
import { NgForOf,NgIf } from '@angular/common';

@Component({
  selector: 'app-dog-list-item',
  standalone: true,
  imports: [NgIf,NgForOf],
  templateUrl: './dog-list-item.component.html',
  styleUrl: './dog-list-item.component.scss'
})
export class DogListItemComponent {
@Input() dogs?:Dog;
}
