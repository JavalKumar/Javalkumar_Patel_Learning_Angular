import { Component } from '@angular/core';
import { Dog } from '../models/dog';
import { NgForOf } from '@angular/common';
import { NgFor } from '@angular/common';
import { DogListItemComponent } from '../dog-list-item/dog-list-item.component';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [NgFor,NgForOf,DogListItemComponent],
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {
  displayedColumns:string[]= ['name', 'breed', 'age', 'weight', 'isAdopted'];
  dogs: Dog[] = [
    { name: 'Rozy', breed: 'Doberman', age: 13, weight: 30, isAdopted: false },
    { name: 'Oreo', breed: 'German Shepherd', age: 1, weight: 6, isAdopted: true },
    { name: 'Preeti', breed: 'Lab', age: 5, weight: 25, isAdopted: true },
    { name: 'Murphie', breed: 'Pug', age: 4, weight: 12, isAdopted: false },
    { name: 'Staphy', breed: 'Pomeranian', age: 7, weight: 15, isAdopted: false },
    { name: 'Candy', breed: 'Pitbull', age: 5, weight: 28, isAdopted: true }
  ];

  selectedDog?: Dog;

  selectDog(dog: Dog): void {
    console.log(dog);
    this.selectedDog = dog;
  }
  
}
