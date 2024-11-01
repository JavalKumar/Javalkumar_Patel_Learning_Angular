import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Javalkumar-Patel-Learning-Angular';
  name: string = "Javalkumar Patel";
  favCar: string = "VW Polo GTI"
}
