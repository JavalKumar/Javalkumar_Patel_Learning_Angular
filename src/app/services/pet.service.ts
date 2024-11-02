import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { dogs } from '../data/mock-content';
import { Dog } from '../models/dog';
@Injectable({
  providedIn: 'root'
})
export class PetService {
  private pets: Dog[] = dogs;
  constructor() { }

  getPet():Observable<Dog[]>{
    return of(dogs);
  }
  addPet(newPet: Dog): Observable<Dog[]>{
    this.pets.push(newPet);
  }
  updatePet(updatepet:Dog): Observable<Dog[]>{
    const index = this.pets.findIndex(dogs=>dogs.name === this.updatePet.name);
    if(index!== -1){
      this.pets[index] = this.updatePet;
    }

  }
}
