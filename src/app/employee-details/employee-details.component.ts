import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http
      .get<any>(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .subscribe((data) => {
        this.employee = data;
      });
  }
}
