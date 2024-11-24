import {Component, OnInit} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'; // Import HttpClientModule and HttpClient
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,  // Add HttpClientModule here
  ],
})
export class EmployeesComponent implements OnInit {
  employees: any[] = [];
  searchQuery = '';
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'actions'];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<any>('https://dummy.restapiexample.com/api/v1/employees')
      .subscribe((response) => {
        this.employees = response.data;
      });
  }

  filterEmployees() {
    return this.employees.filter((employee) =>
      employee.employee_name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
