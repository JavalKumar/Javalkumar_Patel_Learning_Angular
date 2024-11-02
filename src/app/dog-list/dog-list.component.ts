import { Component } from '@angular/core';
import { Dog } from '../models/dog';
import { DogListItemComponent } from '../dog-list-item/dog-list-item.component';
import { CommonModule } from '@angular/common';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-dog-list',
  standalone: true,
  imports: [CommonModule,DogListItemComponent],
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent {
  displayedColumns:string[]= ['name', 'breed', 'age', 'weight', 'isAdopted'];
  dogs: Dog[] = [];

  constructor(private petService:PetService){
    
  }

  selectedDog?: Dog;

  selectDog(dog: Dog): void {
    console.log(dog);
    this.selectedDog = dog;
  }
  
}
