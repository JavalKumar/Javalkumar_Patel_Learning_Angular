import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dog } from './models/dog';
import { NgFor } from '@angular/common';
import { DogListComponent } from "./dog-list/dog-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, DogListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dogs: Dog[] = [
    {name: 'Rozy', breed: 'Dobberman', age: 13, weight: 30, isAdopted: false},
    {name: 'Oreo', breed: 'German Shephard', age: 1, weight: 6, isAdopted: true},
    {name: 'Preeti', breed: 'Lab', age: 5, weight: 25, isAdopted: true},
    {name: 'Murphie', breed: 'Pug', age: 4, weight: 12, isAdopted: false},
    {name: 'Staphy', breed: 'Pomerian', age: 7, weight: 15, isAdopted: false},
    {name: 'Candy', breed: 'Pitbull', age: 5, weight: 28, isAdopted: true}
  ]
}
