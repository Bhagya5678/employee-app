import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule], // Include RouterModule here
})
export class AppComponent {
  title = 'employee-app';
}
