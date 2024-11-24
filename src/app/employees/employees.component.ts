import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient to fetch data
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { MatTableModule } from '@angular/material/table'; // Import Angular Material Table module
import { MatInputModule } from '@angular/material/input'; // Import Angular Material Input module
import { MatButtonModule } from '@angular/material/button'; // Import Angular Material Button module
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf, *ngFor
import { RouterModule } from '@angular/router'; // Import RouterModule for routing functionality

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  standalone: true,  // This indicates this is a standalone component
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,  // Add RouterModule if you need routing
  ],
})
export class EmployeesComponent implements OnInit {
  employees: any[] = []; // Array to hold employee data
  searchQuery = ''; // The search query for filtering employees
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'actions']; // Define table columns

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch employee data from the API
    this.http
      .get<any[]>('https://dummy.restapiexample.com/api/v1/employees')
      .subscribe((data) => {
        this.employees = data; // Assign the fetched data to employees array
      });
  }

  // Function to filter employees based on search query
  filterEmployees() {
    return this.employees.filter((employee) =>
      employee.employee_name.toLowerCase().includes(this.searchQuery.toLowerCase()) // Case-insensitive search
    );
  }
}
